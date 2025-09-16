import React from 'react';

const TermsOfUsage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Usage</h1>

        <div className="prose prose-invert max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Component Usage Terms</h2>
            <p className="text-gray-300 mb-4 text-sm">
              Welcome to StackBits! We&apos;re excited that you want to use our components in your
              projects. Here are the important terms regarding the use of our components:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">What You CAN Do</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  <li>Use our components freely on your websites and applications</li>
                  <li>Modify and customize the components to fit your design needs</li>
                  <li>Use them in both personal and commercial projects</li>
                  <li>Share your implementations with others</li>
                  <li>Integrate them into your existing codebases</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">What You CANNOT Do</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  <li>Copy and sell our components as your own - This is strictly prohibited</li>
                  <li>Claim ownership or authorship of our original components</li>
                  <li>Redistribute our components as part of a paid component library</li>
                  <li>Remove attribution or copyright notices</li>
                  <li>Use our components to create competing component libraries</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 mb-4 text-sm">
              If you have any questions about this terms of usage or our component usage terms,
              please don&apos;t hesitate to reach out to us.
            </p>
            <p className="text-gray-300 text-sm">
              We&apos;re here to help and want to make sure you have a great experience using
              StackBits!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsage;
