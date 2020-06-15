const core = require('@actions/core');
const github = require('@actions/github');

try {
  const pattern = core.getInput('pattern');
  console.log(`Using pattern [${pattern}]`);
  const regex = new RegExp(pattern);
  const prBody =
        github.context.payload &&
        github.context.payload.pull_request &&
        github.context.payload.pull_request.body;
  const isValid = regex.test(prBody);
  if (!isValid) {
    core.setFailed(
      `Pull request body "${prBody}" does not match regex pattern "${pattern}".`
    );
  }
} catch (error) {
  core.setFailed(error.message);
}
