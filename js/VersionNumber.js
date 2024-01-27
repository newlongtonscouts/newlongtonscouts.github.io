
// Major Version Number.
const major = 3;

// Release Date / Time of Major Version.
const releaseDateTime = new Date ("2024-01-01T00:00:00Z");


import { Octokit, App } from "https://esm.sh/octokit";

const octokit = new Octokit({ });

var results = await octokit.request("GET /repos/newlongtonscouts/newlongtonscouts.github.io/commits?per_page=100000",
{
  owner: "OWNER",
  repo: "REPO",
  headers:
  {
    "X-GitHub-Api-Version": "2022-11-28"
  }
});

var commitsSinceLastMajorVersion = [];

for (var commit of results.data)
{
	var commitDate = new Date (commit.commit.committer.date);
	
	if (commitDate.getTime () >= releaseDateTime.getTime ())
	{
		commitsSinceLastMajorVersion.push (commit);
	}
}

document.getElementById ("VersionNumber").textContent = major + "." + commitsSinceLastMajorVersion.length;