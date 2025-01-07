import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

async function main() {
	try {
		core.setOutput('status', 'ok')
	} catch (error) {
		core.setFailed(error.message);
	}
}
main()
