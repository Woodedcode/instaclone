const profiles = {
    stavroshalkius: {
        name: "Stavros Halkius",
        bio: "Comedian",
        followers: "1.05M"
    },
    ryanwoods: {
        name: "Ryan Woods",
        bio: "Software Engineer, and comedian",
        followers: " 100K"
    },
    beyonce: {
        name: "Beyonce",
        bio: "Singer",
        followers: "200M"
    }
}

export default async function ProfilePage({params}) {
    const {username} = await params;
    
    const profile = profiles[username];

        if (!profile) {
            return (
                <h1>User not found</h1>
            )
        }
    return (
        <main>
            <h1>@{username}</h1>
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
            <p>Followers: {profile.followers}</p>
        </main>
        
    )
}