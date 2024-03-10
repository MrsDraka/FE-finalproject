import React from "react";

export default function AboutPage() {
  return (
    //About Us page
    <div className="bg-indigo-950 min-h-screen pt-20">
      <div className=" w-full m-auto max-w-3xl">
        <div className="flex justify-start">
          <img
            className="w-40"
            src="\images\iconufocoww.svg"
            alt="ufo abducting cow icon"
          ></img>
        </div>

        <div className="max-w-3xl mx-auto p-6 bg-sky-300 rounded-lg shadow-md my-4">
          <h1 className="text-3xl font-bold mb-4">About GalacticRoutes!</h1>
          <p className="text-lg mb-4">
            In the neon-drenched underbelly of the metropolis, where data
            streams intersect and cosmic horizons stretch infinitely,
            GalacticRoutes emerged as a beacon of exploration in the far future.
          </p>
          <p className="text-lg mb-4">
            Fuelled by a collective passion for discovery and a relentless drive
            for innovation, we transcend the boundaries of space and time to
            unlock the mysteries of the cosmos. Our mission is to democratize
            access to the stars, offering every dreamer, every wanderer,
            explorer, and every seeker the chance to traverse the vast expanse
            of the universe.
          </p>
          <p className="text-lg mb-4">
            At GalacticRoutes, we blend cutting-edge technology with the grit of
            the streets, revolutionizing the way we navigate the cosmos. From
            our state-of-the-art interface to our meticulously curated selection
            of destinations, we're committed to providing an unparalleled
            experience for adventurers of all kinds.
          </p>
          <p className="text-lg mb-4">
            Join us in rewriting the narrative of space travel. Whether you're a
            seasoned explorer or a starry-eyed novice, there's a place for you
            in our cosmic journey. Together, let's redefine the future of
            exploration and forge a path to the stars.
          </p>
          <p className="text-lg mb-4">
            The universe awaits. Let's make history.
          </p>
        </div>
        <div className="flex justify-end">
          <img
            className="w-40"
            src="\images\iconspaceshuttlew.svg"
            alt="space shuttle icon"
          ></img>
        </div>
      </div>
    </div>
  );
}
