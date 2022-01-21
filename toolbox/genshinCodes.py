import praw

reddit = praw.Reddit(
    client_id="7c_nrGcOfPJmsQ",
    client_secret="DZKapZy_XR3uAhAqx2rhI-lQ0pwlrQ",
    user_agent=
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
)

for submission in reddit.subreddit("Genshin_Impact").new(limit=20):
    if "code" in submission.title.lower():
        print(submission.url)
