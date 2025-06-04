// TeamMembersSection.jsx
import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Racheal Dami Odunewu",
      role: "Founder and Chief Executive Officer",
      image: "/people-1.png",
    },
    {
      name: "Jefferson Ondze-Mangha",
      role: "Cofounder and Chief Technical Officer",
      image: "/people-2.png",
    },
    {
      name: "Dr. Ariel Morel",
      role: "Cofounder and Chief Operating Officer",
      image: "/people-3.png",
    },
    {
      name: "Usman Wajid",
      role: "Advisor",
      image: "/people-4.png",
    },
    {
      name: "David Avi Myers",
      role: "Founding Engineer",
      image: "/people-5.png",
    },
    {
      name: "Godwin Ekuma",
      role: "Advisor",
      image: "/people-6.png",
    },
    {
      name: "Payton Flaugh",
      role: "Marketing",
      image: "/people-7.png",
    },
    {
      name: "Vineetha Manda",
      role: "Product Management Intern",
      image: "/people-8.png",
    },
    {
      name: "Zulfiquer Muhtasim Rashid",
      role: "Engagement & Grants Intern",
      image: "/people-9.png",
    },
    {
      name: "Shahista Tazeen",
      role: "Engineering Intern",
      image: "/people-10.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-teal-600 font-medium mb-4">Our team</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Our strength comes
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-600">
            from our people.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Profile Image */}
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Member Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
