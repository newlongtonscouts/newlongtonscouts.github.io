---

#

---

const major = {{ site.majorversion }};
const releaseDateTime = new Date ("{{ site.releasedatetime }}");


import { Octokit, App } from "https://esm.sh/octokit";

const octokit = new Octokit({ });

var results = await octokit.paginate ("GET /repos/{{ site.repo }}/commits?per_page=100",
{
  owner: "OWNER",
  repo: "REPO",
  headers:
  {
    "X-GitHub-Api-Version": "2022-11-28"
  }
});

var commitsSinceLastMajorVersion = [];

for (var commit of results)
{
	var commitDate = new Date (commit.commit.committer.date);
	
	if (commitDate.getTime () >= releaseDateTime.getTime ())
	{
		commitsSinceLastMajorVersion.push (commit);
	}
}

document.getElementById ("VersionNumber").textContent = major + "." + commitsSinceLastMajorVersion.length;