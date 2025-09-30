.PHONY: build test lint

build:
	@echo "Building donation-service..."
	@go build -o app .

test:
	@echo "Testing donation-service..."
	@go test ./...

lint:
	@echo "Linting donation-service..."
	@golangci-lint run
