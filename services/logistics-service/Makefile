.PHONY: build test lint

build:
	@echo "Building logistics-service..."
	@cargo build --release

test:
	@echo "Testing logistics-service..."
	@cargo test

lint:
	@echo "Linting logistics-service..."
	@cargo clippy -- -D warnings
