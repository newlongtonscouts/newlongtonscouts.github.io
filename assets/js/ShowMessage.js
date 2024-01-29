---

#

---

const currentDate = new Date ();
const postDate = '{{ site.posts.first.date | date: "%Y-%m-%d" }}';
const persistent = {{ site.posts.first.persistent }};

if (postDate == currentDate.toISOString ().slice (0, 10) || persistent === "true")
{
	document.getElementById ("Message").style.display = "block";
}