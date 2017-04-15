# nemo3-example

This is an example repo that uses the following libraries:

- nemo (v3)
- nemo-view (v3)
- babel
- jest
- yarn

## Prerequisites

This example is using the new chrome headless mode which is only available
in Chrome Canary at the moment.  If you are using OSX, you can easily install
Chrome Canary via homebrew cask:

```bash
brew cask install google-chrome-canary
```

## Installation

```bash
git clone git@github.com:skratchdot/nemo3-example.git
cd nemo3-example
# run unit tests:
yarn test
# run functional tests:
yarn e2e
```
