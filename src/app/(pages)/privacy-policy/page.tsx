import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container min-h-screen py-16">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl lg:text-4xl font-medium">Privacy Policy</h1>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="mb-8"><b>Suggested text:</b> Our website address is: http://aralsf.local.</p>

          <h2 className="text-2xl font-semibold">Comments</h2>
          <p className="mt-3">
            <b>Suggested text</b>: When visitors leave comments on the site we collect the data shown in the comments form, and also the
            visitor’s IP address and browser user agent string to help spam detection.
          </p>
          <p className="mt-8">
            An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you
            are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your
            comment, your profile picture is visible to the public in the context of your comment.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Media</h2>
          <p className="mt-3">
            Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS)
            included. Visitors to the website can download and extract any location data from images on the website.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Cookies</h2>
          <p className="mt-3">
            Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies.
            These are for your convenience so that you do not have to fill in your details again when you leave another comment. These
            cookies will last for one year.
          </p>
          <p className="mt-8">
            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains
            no personal data and is discarded when you close your browser.
          </p>

          <p className="mt-8">
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login
            cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for
            two weeks. If you log out of your account, the login cookies will be removed.
          </p>

          <p className="mt-8">
            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It expires after 1 day.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Embedded content from other websites</h2>
          <p className="mt-3">
            Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from
            other websites behaves in the exact same way as if the visitor has visited the other website.
          </p>

          <p className="mt-8">
            These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to
            that website.
          </p>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
