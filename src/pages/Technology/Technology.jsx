import MainLayout from "../../components/MainLayout/MainLayout";

const Technology = () => {
  const review = {};
  return (
    <MainLayout>
      <div className="theme-content">
        <h1 className="theme-title">Building a Modern Website</h1>
        <div className="theme-card-container">
          <div className="theme-card">
            <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex gap-1"></div>
              <span className="text-slate-500 dark:text-slate-200 ml-2"></span>
            </div>
            <p className="text-slate-700 dark:text-slate-200">
              {review.review}
            </p>

            <h2 class="text-lg font-semibold mb-4">Introduction</h2>
            <p class="mb-4">
              As a developer, I am always eager to explore and implement
              innovative technologies to create engaging user experiences. I
              have developed this cutting-edge website featuring React, Tailwind
              CSS, Bitmovin video player, and Azure Media Services. The website
              also includes both dark and light modes to enhance user
              experience. I will share insights into the choices I made during
              the development process and discuss the advantages these
              technologies bring to the table.
            </p>

            <ul class="list-decimal pl-6 mb-4">
              <li>
                <h2 class="text-lg font-semibold mb-4">
                  React and Tailwind CSS
                </h2>
                <p class="mb-4">
                  For this project, I opted for React, a popular JavaScript
                  library developed by Facebook, for its component-based
                  architecture and the ease it offers in building interactive
                  user interfaces. This approach promotes code reusability,
                  maintainability, and faster development time.
                </p>
                <p class="mb-4">
                  To style the website, I chose Tailwind CSS, a utility-first
                  CSS framework, for the following reasons:
                </p>
                <ul class="list-disc pl-6 mb-4">
                  <li>
                    Rapid prototyping: Developers can quickly build and iterate
                    on designs without needing to write custom CSS.
                  </li>
                  <li>
                    Consistency: Tailwind CSS provides a set of predefined
                    design tokens, ensuring a cohesive design across the
                    website.
                  </li>
                  <li>
                    Responsiveness: The framework makes it easy to create
                    responsive designs that adapt to various screen sizes.
                  </li>
                </ul>
              </li>

              <li>
                <h2 class="text-lg font-semibold mb-4">
                  Bitmovin Video Player
                </h2>
                <p class="mb-4">
                  I selected the Bitmovin Video Player for this project due to
                  its adaptability and extensive feature set, which includes:
                </p>

                <ul class="list-disc pl-6 mb-4">
                  <li>
                    Adaptive streaming: The player adjusts the video quality
                    based on the user's network connection, providing an optimal
                    viewing experience.
                  </li>
                  <li>
                    Cross-platform support: Bitmovin works seamlessly on various
                    devices and browsers, ensuring a consistent experience for
                    all users.
                  </li>
                  <li>
                    Customization: The player can be easily tailored to match
                    the website's design and branding.
                  </li>
                </ul>
              </li>

              <li>
                <h2 class="text-lg font-semibold mb-4">Dark and Light Modes</h2>
                <p class="mb-4">
                  To cater to individual preferences and improve accessibility,
                  particularly for those with visual impairments, I implemented
                  both dark and light modes for the website's interface.
                </p>
              </li>

              <li>
                <h2 class="text-lg font-semibold mb-4">
                  Azure Media Services for Video Streaming
                </h2>
                <p class="mb-4">
                  I chose Azure Media Services, a cloud-based media delivery
                  platform, for video streaming due to its scalability,
                  flexibility, and cost-efficiency. Key benefits include:
                </p>

                <ul class="list-disc pl-6 mb-4">
                  <li>
                    Global reach: Azure's vast network of data centers ensures
                    low-latency streaming, regardless of the user's location.
                  </li>
                  <li>
                    Security: Azure Media Services provides robust content
                    protection and secure streaming.
                  </li>
                  <li>
                    Ease of integration: The platform easily integrates with the
                    Bitmovin video player and Azure Container Instances.
                  </li>
                  <li>Code Hosting, Docker, and Deployment</li>
                </ul>
              </li>

              <li>
                <h2 class="text-lg font-semibold mb-4">
                  Code Hosting, Docker, and Deployment
                </h2>
                <p class="mb-4">
                  For code hosting, I selected GitHub for its popularity,
                  reliability, and excellent collaboration tools. To streamline
                  deployment, I created a Docker image with an Nginx server and
                  hosted it on Docker Hub. This approach offers several
                  advantages:
                </p>

                <ul class="list-disc pl-6 mb-4">
                  <li>
                    Portability: The Docker image can be easily deployed and run
                    on any platform that supports Docker, simplifying the
                    deployment process.
                  </li>
                  <li>
                    Isolation: Docker containers encapsulate all dependencies,
                    ensuring a consistent runtime environment.
                  </li>
                  <li>
                    Scalability: Containers can be quickly scaled up or down to
                    meet changing demands.
                  </li>
                </ul>

                <p class="mb-4">
                  To deploy the website, I utilized Azure Container Instances
                  for their ease of use, fast startup times, and seamless
                  integration with Azure Media Services.
                </p>
              </li>

              <li>
                <p className="text-lg font-semibold mb-4">Conclusion</p>
                <p>
                  Incorporating React, Tailwind CSS, Bitmovin Video Player,
                  Azure Media Services, Docker, and Azure Container Instances
                  has resulted in a modern, efficient, and user-friendly website
                  that I am proud to include in my portfolio. These technologies
                  were chosen for their individual strengths and their ability
                  to work together seamlessly, resulting in a high-quality
                  website that can adapt to future demands.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Technology;
