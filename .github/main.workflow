workflow "Install, Test, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

# action "Install" {
#   uses = "actions/npm@master"
#   args = "install"
# }

# action "Test" {
#   needs = "Install"
#   uses = "actions/npm@master"
#   args = "test"
# }

# Filter for a new tag
action "Tag" {
  # needs = "Test"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  needs = "Tag"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}