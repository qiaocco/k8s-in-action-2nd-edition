IMAGE ?= kubia:0.1
FULL_IMAGE_TAG = "$(PREFIX)$(IMAGE)"
DOCKER_REPO ?= qiaocc/kubia:0.1

build:
	@echo "Building image $(FULL_IMAGE_TAG)"
	docker build -t $(FULL_IMAGE_TAG) ./

tag:
	docker tag $(FULL_IMAGE_TAG) $(DOCKER_REPO)

push:
	docker push $(DOCKER_REPO)