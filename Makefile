targets = \
  help

target_help = \
  'help - Prints this help message.' \
  ' ' \
  'code-check - Runs eslint on all files in the repo' \
  'test - runs tests' \
  'coverage - runs tests and produces terminal and html reports' \
  'run-server - Starts the local server.'

GIT_HOOKS_TARGET_DIR = .git/hooks/
GIT_HOOKS_SOURCE_DIR = git-hooks/
GIT_HOOKS_FILES = prepare-commit-msg
GIT_HOOKS_TARGETS = $(addprefix $(GIT_HOOKS_TARGET_DIR),$(GIT_HOOKS_FILES))
GIT_HOOKS_SOURCES = $(addprefix $(GIT_HOOKS_SOURCE_DIR),$(GIT_HOOKS_FILES))

$(GIT_HOOKS_TARGET_DIR)%: $(GIT_HOOKS_SOURCE_DIR)%
	@mkdir -p $(GIT_HOOKS_SOURCE_DIR)
	@cp $< $@

help:
	@echo "Valid targets are:\n"
	@for t in $(target_help) ; do \
	    echo $$t; done
	@echo

code-check:
	@echo eslint not enabled yet



node = $(shell which node)
yarn = $(shell which yarn)

ifeq ($(node),)
  NEED_NODE = node
endif
ifeq ($(yarn),)
  NEED_YARN = yarn
endif

node:
	@brew install node

yarn: $(NEED_NODE)
	@brew install yarn
	@yarn add --dev jest

setup: $(NEED_YARN) $(GIT_HOOKS_TARGETS)

test: setup
	@yarn test

coverage: setup
	@echo mocha not enabled yet

.env: .env.example
	@cp .env.example .env

run-server: .env setup
	@yarn start
