import MainLayout from "../../components/MainLayout/MainLayout";
const Affiliate = () => {
  return (
    <MainLayout>
      <div className="theme-container">
        <h1 className="theme-title">Affiliate Program</h1>
        <div className="theme-card-container">
          <div className="theme-card">
            <h1 class="text-2xl font-semibold mb-4">
              The Best Online Singing Lessons!
            </h1>
            <p class="mb-6">
              First released in 2018, and completely revamped in summer 2019,
              30DaySinger.com is a new online singing program that has helped
              thousands of people become better singers.
            </p>
            <h2 class="text-2xl font-semibold mb-4">
              Everything You Need To Become A Better Singer!
            </h2>
            <p class="mb-6">
              A Full Access membership to 30DaySinger.com includes everything
              you need to become a great singer, including:
            </p>
            <ul class="list-disc pl-6 mb-8">
              <li>Beginner 30 day courses with 3 professional instructors</li>
              <li>Vocal Styles of Famous Singers</li>
              <li>Runs &amp; Embellishments</li>
              <li>Classical Singing Technique</li>
              <li>Perfect Pitch &amp; Intonation</li>
              <li>Steps To Better Phrasing</li>
              <li>How To Master Vibrato</li>
              <li>Improving Vocal Tone</li>
              <li>Harmonizing with Another Singer</li>
              <li>Instructor Help In A Singer's Forum</li>
              <li>Plus much more!</li>
            </ul>
            <h2 class="text-2xl font-semibold mb-4">
              Who can be an affiliate?
            </h2>
            <p class="mb-6">
              Anyone with a high-quality music website or app can become a
              successful affiliate.
            </p>
            <h2 class="text-2xl font-semibold mb-4">
              How does the affiliate program work?
            </h2>
            <ol class="list-decimal pl-6 mb-8">
              <li>
                Visitor clicks on an affiliate link on your site or in an email.
              </li>
              <li>
                The visitors IP is logged and a cookie is placed in their
                browser for tracking purposes.
              </li>
              <li>The visitor browses our site, and may decide to order.</li>
              <li>
                If the visitor orders (the order need not be placed during the
                same browser session--cookies and IPs are stored indefinitely),
                the order will be registered as a sale for you.
              </li>
              <li>We will review and approve the sale.</li>
              <li>
                You will receive commission payouts on the 15th of every month.
                The commission for a trial signup is $25, the commission for a
                Full Access signup is $30.
              </li>
            </ol>
            <p class="font-bold mb-6">
              <strong>
                That's it! You send us business, we send you money!
              </strong>
            </p>
            <h2 class="text-2xl font-semibold mb-4">Rules and Requirements</h2>
            <p class="mb-6">
              We do have some basic ground rules for the program, so please read
              before signing up:
            </p>
            <ul class="list-disc pl-6 mb-8">
              <li>
                All participants in the US must enter a US Social Security or
                Taxpayer ID number. International customers simply enter
                "International" in this field.
              </li>
              <li>You may NOT receive credit for referring yourself.</li>
            </ul>
            <p class="mb-6">
              Participants caught violating or attempting to circumvent these
              rules will have all affiliate credit voided and will not receive
              payouts. Additionally, they will be banned from further
              participation in our affiliate program.
            </p>
            <h2 class="text-2xl font-semibold mb-4">Ready to join?</h2>
            <p class="mb-6">
              Signing up and getting your account configured couldn't be easier.
              You can be referring business our way in as little as five
              minutes.
            </p>
            <p className="flex gap-2">
              <a
                class="mt-4 inline-block bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded"
                href="/"
              >
                Join Now
              </a>
              <a
                class="mt-4 inline-block bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded"
                href="/"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Affiliate;
