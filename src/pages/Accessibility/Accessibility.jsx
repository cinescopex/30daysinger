import MainLayout from "../../components/MainLayout/MainLayout";
import "../../styles/theme.css";

const Accessibility = () => {
  return (
    <MainLayout>
      <div className="theme-content">
        <h1 className="theme-title">Accessibility</h1>
        <div className="theme-card-container">
          <div className="theme-card">
            <p>
              30 Day Lessons Inc. is committed to providing a website that is
              accessible to the widest possible audience, regardless of
              technology or ability. We are actively working to increase the
              accessibility and usability of our website and in doing so adhere
              to many of the available standards and guidelines.
            </p>
            <p>
              This website endeavours to conform to level A of the World Wide
              Web Consortium (W3C) Web Content Accessibility Guidelines 2.1.
              These guidelines explain how to make web content more accessible
              for people with disabilities. Conformance with these guidelines
              will help make the web more user friendly for all people.
            </p>
            <p>
              The guidelines have three levels of accessibility (A, AA and AAA).
              We’ve chosen Level A as the target for www.30daysinger.com.
            </p>
            <p>
              We're working hard to achieve our goal of Level A accessibility,
              but we realise there are some areas that still need improving.
            </p>
            <p>
              We will regularly review progress towards policy goals. Please
              report any issues or feedback to support@30daysinger.com.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Accessibility;
