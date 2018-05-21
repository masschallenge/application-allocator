targets = \
  help

target_help = \
  'help - Prints this help message.' \
  ' ' \
  'code-check - Runs eslint on all files in the repo' \
  'test - runs tests' \
  'coverage - runs tests and produces terminal and html reports'

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

setup: $(GIT_HOOKS_TARGETS)
	@brew install node
	@brew install yarn
	@bin/setup
	@echo Setup is done!

test: setup
	@echo mocha not enabled yet

coverage: $(VENV)
	@echo mocha not enabled yet
