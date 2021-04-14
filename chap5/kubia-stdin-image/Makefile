IMAGE ?= kubia:1.0-stdin
# export PREFIX=qiaocc
# export PREFIX=registry.cn-shanghai.aliyuncs.com/qiaocc
FULL_IMAGE_TAG = "$(PREFIX)/$(IMAGE)"

build:
	@echo "Building image $(FULL_IMAGE_TAG)"
	docker build -t $(FULL_IMAGE_TAG) ./

push:
	docker push $(FULL_IMAGE_TAG)