import Seo from '../components/SEO'

export default function contact(posts) {
    // console.log(posts)

    return (
        <>
            <Seo title="request"></Seo>
            <div>
                {!posts && <h4>Loading</h4>}
                {posts && Object.keys(posts).map((item) => (
                    <div>
                        {item} : {JSON.stringify(posts[item], null, '\t')}
                    </div>
                ))}
            </div>
        </>
    )
}


export async function getServerSideProps(context) {
    // console.log(context)
    async function cocAPI(PID) {
        try {
            const clashofClansAPI = await fetch(`https://api.clashofclans.com/v1/players/%23` + PID, {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJjNzlhYzRlLTU2ZTYtNGQ2NS05M2E1LTNjNDA1MjY2MTIzOSIsImlhdCI6MTY1NTM1MzM1OSwic3ViIjoiZGV2ZWxvcGVyL2M3MTY1ZDc4LWFmZTQtZDViOC1jZjY0LWFkYmEwZTI1MGJmNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEyOC4xMzQuMjAzLjg5Il0sInR5cGUiOiJjbGllbnQifV19.duvFZ9jYg5FHUkSFx8ce0Mz_L0IpY6hdqQ9DCMEDpqQxSVhDj58FRG0o960tgk5SLAbJ30GYW9nAu17d120glQ'
                }
            })
            const posts = await clashofClansAPI.json();
            return posts;
        } catch(e) {
            pass
        }
    }

    const {query} = context;

    const posts = await cocAPI(query.id);
    return {
        props: {
            ...posts,
        }
    };
}