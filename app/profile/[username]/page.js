const profiles = {
    cristiano: {
        name: "Cristiano Ronaldo",
        bio: "GOAT footballer",
        followers: "660M",
    },
    nike: {
        name: "Nike",
        bio: "JUST DO IT",
        followers: "1M",

    },
    beyonce: {
        name: "Beyonce",
        bio: "Singer",
        followers: "777M",
    },
}

export default async function ProfilePage({params}) {
    const {username} = await params;

    const profile = profiles[username]

    if (!profile) {
        return <h1>User not found</h1>
    }
    return (
        <main>
            <h1>@{username}</h1>
            <h2>{profile.name}</h2>
            <h2>{profile.bio}</h2>
            <h2>{profile.followers} Followers</h2>
        </main>
    )
}