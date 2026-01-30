export function HomeRatingCard() {
  return (
    <div className="bg-purple-50 rounded-3xl p-8 flex flex-col justify-between items-start h-full min-h-[340px]">
      <div>
        {/* Student Avatars */}
        <div className="flex -space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <img
              alt="Student avatar 1"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnu7tg9f1FkVAv9ZymRx4NSHLNMaefEHw-kCX9Y-It37ze23fJwiw1tuWd5jAXUJx-c5JG-HU-JFkG61EzKB8Go8gb0ovb7RPSPfTCVD8tn6eCMCEbU1Cx5VIrFwTLU5X8Rz3zJaEv6SFVeXjxOZ2O5A-ln5qqmImlBOzR9KqEpGzr0557Unm4E8FIUhNbRo6vW118JgJcaR3MLjANzJ5lanOcG3dDMTBFjSmt6ffZPg4xKO936ztT9yCssZ0Bm4WoM5bxTMsA2hY"
            />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <img
              alt="Student avatar 2"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyOnIzyv2Lu9IhTbtcri_T3Eaz7lf89UJBuRCL0vCPm_bnW-7EYm2FlYVmvj3U0K3KAAmmo3X48a2ZD18hmfawsGOQg8WO3qgFHKjYa7D0n08GaVe63UIv_4yhFFh-vCrSCDA4-E9kIMFBYExMHn3vetSf-nbKDmJGGRT2fJtzdEJ7YGqdR_KLmOP5KlDzTrE5tgy4jA8vKD4B3K_H7p4XaU9_uLIDJa1Dqkyo6_CBKXLs1vz24L9P2yl0fjp8kkT6Ojzs7kIVjvM"
            />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <img
              alt="Student avatar 3"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_IMFid3NRHESEgW4GWwKVSJSWTIVa5BjFQOirowjoZ2luxTo0scjf4uOeKmmSSCGhU0_eeDNhRyebLbB6LumIvINIRaKNr0Fe7yYyfvBcV6CYBKJhllUppIf9ojG2QgQs1tsNdgsOUrVOn5t2E7d5kbJS-bIHMF6AU44EoxLHP7hk_dNWxFRl_VJsjP8lVrsj8xcMYdS2LZIPRd0c4hxUV3ilsb_1lFcQMP5Ph2f-oi7VSJhPgPBQzF35kZ6b6YW6bs7YZ1cON5I"
            />
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex text-warning mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-purple-700 font-bold text-sm mb-4">
          4.9/5 rating from 210+ reviews
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Our platform offers a wide range of courses designed for employability.
        </p>
      </div>
      <button className="border border-purple-700 text-purple-700 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-700 hover:text-white transition-all">
        Explore Courses
      </button>
    </div>
  )
}
