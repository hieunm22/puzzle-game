# deploy targets, run from the repo root. the vps job in .github/ calls publish-sync.
# the Dockerfile builds the bundle inside the image, nothing runs on the host
IMAGE := puzzle-game
CONTAINER := puzzle-game
PORT := 3005

.PHONY: destroy docker publish publish-sync

# an image still in use cannot be removed, the container goes first. a first
# deploy has neither, and a missing one is not an error
destroy:
	-docker container stop $(CONTAINER)
	-docker container rm $(CONTAINER)
	-docker image rm $(IMAGE)

docker:
	docker build -t $(IMAGE) -f Dockerfile .
	docker run --name $(CONTAINER) -ditp $(PORT):80 --restart unless-stopped $(IMAGE)

publish: destroy docker

publish-sync: publish
