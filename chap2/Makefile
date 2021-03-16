IMAGE ?= kubia:0.1
FULL_IMAGE_TAG = "$(PREFIX)$(IMAGE)"
DOCKER_REPO ?= qiaocc/kubia:0.1

run:
	node app.js

build:
	docker build -t kubia:latest .

tag:
	docker tag $(FULL_IMAGE_TAG) $(DOCKER_REPO)

push:
	docker push $(DOCKER_REPO)

