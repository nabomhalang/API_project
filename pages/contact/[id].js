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
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUxODEwNjU1LWM0ODEtNDEyNS1iYzM3LTQ5YmU5Y2JmMDY3NCIsImlhdCI6MTY1NTM1NjE2MCwic3ViIjoiZGV2ZWxvcGVyL2M3MTY1ZDc4LWFmZTQtZDViOC1jZjY0LWFkYmEwZTI1MGJmNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIyMy4zOC4xMC4yMzEiLCIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.Opnvs3oAilgJHT6VNaSmha91EIFBAX1rhgsChxZJrE2mzLbswkKZC5yYqG0bW-V-Qk1vTZilvuhDZTxDJYoL8A'
                }
            })
            const posts = await clashofClansAPI.json();
            return posts;
        } catch(e) {
            console.log(e);
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