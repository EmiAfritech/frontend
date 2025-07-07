function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
    interest: "demo"
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50" data-id="eccypgff8" data-path="pages/Contact.js">
      <div className="bg-primary text-white py-16" data-id="pocuskq6a" data-path="pages/Contact.js">
        <div className="container mx-auto px-4 md:px-6" data-id="kgd70pafa" data-path="pages/Contact.js">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-id="j4j6sa8a9" data-path="pages/Contact.js">Contact Us</h1>
          <p className="text-xl opacity-90" data-id="axq5scsbx" data-path="pages/Contact.js">
            Get in touch to learn how Risk Advisor can transform your risk management approach.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12" data-id="jf7lx3n65" data-path="pages/Contact.js">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="dyg2royvx" data-path="pages/Contact.js">
          <div className="col-span-2" data-id="lals2es7y" data-path="pages/Contact.js">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8" data-id="8eqnvxb4n" data-path="pages/Contact.js">
              <h2 className="text-2xl font-semibold mb-6" data-id="2d8ur4r5b" data-path="pages/Contact.js">Get in Touch</h2>
              
              {isSubmitted ?
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-md mb-6 animate-fade-in" data-id="4ztq9h5wk" data-path="pages/Contact.js">
                  <div className="flex" data-id="fww9o5crb" data-path="pages/Contact.js">
                    <div className="flex-shrink-0" data-id="agok85l5j" data-path="pages/Contact.js">
                      <i className="fas fa-check-circle text-green-500 text-2xl" data-id="7la2vexeu" data-path="pages/Contact.js"></i>
                    </div>
                    <div className="ml-4" data-id="tac7alqpw" data-path="pages/Contact.js">
                      <h3 className="text-lg font-medium text-green-800" data-id="w2ybtv9vl" data-path="pages/Contact.js">Message Sent Successfully!</h3>
                      <p className="text-green-700 mt-1" data-id="vrcf0ymhm" data-path="pages/Contact.js">
                        Thank you for reaching out. One of our risk management specialists will contact you shortly.
                      </p>
                      <div className="mt-4" data-id="gjp6mzrzi" data-path="pages/Contact.js">
                        <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300" data-id="3u2h4por7" data-path="pages/Contact.js">

                          Send Another Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div> :

              <form onSubmit={handleSubmit} data-id="oor62hgt2" data-path="pages/Contact.js">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-id="fdc3eaa0p" data-path="pages/Contact.js">
                    <div data-id="no7yzzfc4" data-path="pages/Contact.js">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2" data-id="psrtpb9sk" data-path="pages/Contact.js">Full Name</label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name" data-id="mc9lpykku" data-path="pages/Contact.js" />

                    </div>
                    
                    <div data-id="ph2m175xb" data-path="pages/Contact.js">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2" data-id="25r5on07q" data-path="pages/Contact.js">Email Address</label>
                      <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@company.com" data-id="y8gt6szpw" data-path="pages/Contact.js" />

                    </div>
                    
                    <div data-id="25t9qcdgr" data-path="pages/Contact.js">
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2" data-id="xepc1fxc9" data-path="pages/Contact.js">Company</label>
                      <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name" data-id="tcqu442lr" data-path="pages/Contact.js" />

                    </div>
                    
                    <div data-id="gezipwfqr" data-path="pages/Contact.js">
                      <label htmlFor="industry" className="block text-gray-700 font-medium mb-2" data-id="m2q5pvtst" data-path="pages/Contact.js">Industry</label>
                      <select
                      id="industry"
                      name="industry"
                      required
                      value={formState.industry}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" data-id="n81wxybso" data-path="pages/Contact.js">

                        <option value="" data-id="pnt42i8if" data-path="pages/Contact.js">Select your industry</option>
                        <option value="finance" data-id="9dpd3gubu" data-path="pages/Contact.js">Finance & Banking</option>
                        <option value="manufacturing" data-id="kcpob0sss" data-path="pages/Contact.js">Manufacturing</option>
                        <option value="healthcare" data-id="0j889w7bx" data-path="pages/Contact.js">Healthcare</option>
                        <option value="technology" data-id="xzxrkd6ee" data-path="pages/Contact.js">Technology</option>
                        <option value="retail" data-id="7pkrhucr3" data-path="pages/Contact.js">Retail</option>
                        <option value="energy" data-id="h8wncfpan" data-path="pages/Contact.js">Energy & Utilities</option>
                        <option value="government" data-id="tizkx8nyb" data-path="pages/Contact.js">Government</option>
                        <option value="other" data-id="p8bnqp8oj" data-path="pages/Contact.js">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6" data-id="g2nafrfh9" data-path="pages/Contact.js">
                    <label className="block text-gray-700 font-medium mb-2" data-id="mdyy6mdpe" data-path="pages/Contact.js">I'm interested in:</label>
                    <div className="flex flex-wrap gap-4" data-id="31a9c7x12" data-path="pages/Contact.js">
                      <label className="flex items-center" data-id="n4vdv9hme" data-path="pages/Contact.js">
                        <input
                        type="radio"
                        name="interest"
                        value="demo"
                        checked={formState.interest === "demo"}
                        onChange={handleChange}
                        className="text-primary focus:ring-primary mr-2" data-id="2z3do4wps" data-path="pages/Contact.js" />

                        <span data-id="hh5rtluen" data-path="pages/Contact.js">Product Demo</span>
                      </label>
                      
                      <label className="flex items-center" data-id="un7l4rlk0" data-path="pages/Contact.js">
                        <input
                        type="radio"
                        name="interest"
                        value="pricing"
                        checked={formState.interest === "pricing"}
                        onChange={handleChange}
                        className="text-primary focus:ring-primary mr-2" data-id="jdfiaenp4" data-path="pages/Contact.js" />

                        <span data-id="95dyae1of" data-path="pages/Contact.js">Pricing Information</span>
                      </label>
                      
                      <label className="flex items-center" data-id="3jvoaez9l" data-path="pages/Contact.js">
                        <input
                        type="radio"
                        name="interest"
                        value="consultation"
                        checked={formState.interest === "consultation"}
                        onChange={handleChange}
                        className="text-primary focus:ring-primary mr-2" data-id="vhgpblz7l" data-path="pages/Contact.js" />

                        <span data-id="wbnpdoy1j" data-path="pages/Contact.js">Risk Consultation</span>
                      </label>
                      
                      <label className="flex items-center" data-id="6zieg78fq" data-path="pages/Contact.js">
                        <input
                        type="radio"
                        name="interest"
                        value="other"
                        checked={formState.interest === "other"}
                        onChange={handleChange}
                        className="text-primary focus:ring-primary mr-2" data-id="ps5ksd2nb" data-path="pages/Contact.js" />

                        <span data-id="qxhze1au4" data-path="pages/Contact.js">Other</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6" data-id="4qgosxtfq" data-path="pages/Contact.js">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2" data-id="rbzal19uh" data-path="pages/Contact.js">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your risk management needs..." data-id="zt7xpo6aq" data-path="pages/Contact.js">
                  </textarea>
                  </div>
                  
                  <div className="flex justify-end" data-id="4vs4yvczj" data-path="pages/Contact.js">
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md shadow-md transition duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`
                    } data-id="eizumh21u" data-path="pages/Contact.js">

                      {isSubmitting ?
                    <span className="flex items-center" data-id="m6srzvp3r" data-path="pages/Contact.js">
                          <i className="fas fa-spinner fa-spin mr-2" data-id="dk6p46w8w" data-path="pages/Contact.js"></i> Sending...
                        </span> :

                    "Send Message"
                    }
                    </button>
                  </div>
                </form>
              }
            </div>
          </div>
          
          <div data-id="xiov2i6oq" data-path="pages/Contact.js">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6" data-id="jrlayf1lw" data-path="pages/Contact.js">
              <h3 className="text-xl font-semibold mb-4" data-id="s5gaxck00" data-path="pages/Contact.js">Our Office</h3>
              
              <div className="space-y-4" data-id="iz92vpq3y" data-path="pages/Contact.js">
                <div className="flex" data-id="o1lpnkux1" data-path="pages/Contact.js">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center" data-id="so4va68s5" data-path="pages/Contact.js">
                    <i className="fas fa-map-marker-alt text-primary" data-id="9yv16uawe" data-path="pages/Contact.js"></i>
                  </div>
                  <div className="ml-4" data-id="utnrot9hy" data-path="pages/Contact.js">
                    <h4 className="text-md font-medium" data-id="qq6197hcf" data-path="pages/Contact.js">Headquarters</h4>
                    <address className="not-italic text-gray-600 mt-1" data-id="3fztqtohh" data-path="pages/Contact.js">
                      123 Risk Avenue, Suite 456<br data-id="nzcnlfw5h" data-path="pages/Contact.js" />
                      Enterprise City, RC 12345<br data-id="pdxfiqjhs" data-path="pages/Contact.js" />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex" data-id="8ixn2y6x6" data-path="pages/Contact.js">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center" data-id="yj2dq1cmu" data-path="pages/Contact.js">
                    <i className="fas fa-phone text-primary" data-id="1zg8zxm5f" data-path="pages/Contact.js"></i>
                  </div>
                  <div className="ml-4" data-id="u7lxfa53o" data-path="pages/Contact.js">
                    <h4 className="text-md font-medium" data-id="zt1kgm8by" data-path="pages/Contact.js">Phone</h4>
                    <p className="text-gray-600 mt-1" data-id="b2n7zogki" data-path="pages/Contact.js">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex" data-id="j8gf0z2jf" data-path="pages/Contact.js">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center" data-id="ei0e5wxq8" data-path="pages/Contact.js">
                    <i className="fas fa-envelope text-primary" data-id="drh2cxui8" data-path="pages/Contact.js"></i>
                  </div>
                  <div className="ml-4" data-id="owad9u3rt" data-path="pages/Contact.js">
                    <h4 className="text-md font-medium" data-id="t8l5f688s" data-path="pages/Contact.js">Email</h4>
                    <p className="text-gray-600 mt-1" data-id="bd7rebzn4" data-path="pages/Contact.js">info@riskadvisor.ai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8" data-id="oauc814fd" data-path="pages/Contact.js">
              <h3 className="text-xl font-semibold mb-4" data-id="umo1twplu" data-path="pages/Contact.js">Frequently Asked Questions</h3>
              
              <div className="space-y-4" data-id="9dpe2rqe3" data-path="pages/Contact.js">
                <div data-id="wrepv5vhv" data-path="pages/Contact.js">
                  <h4 className="text-md font-medium" data-id="mhgen9p1u" data-path="pages/Contact.js">How quickly can we implement Risk Advisor?</h4>
                  <p className="text-gray-600 mt-1" data-id="q4sfjgplt" data-path="pages/Contact.js">
                    Most clients are up and running within 2-4 weeks, depending on the complexity of your risk landscape.
                  </p>
                </div>
                
                <div data-id="t9twt1l05" data-path="pages/Contact.js">
                  <h4 className="text-md font-medium" data-id="jhtv2822m" data-path="pages/Contact.js">Is Risk Advisor suitable for small businesses?</h4>
                  <p className="text-gray-600 mt-1" data-id="xj72c1f3q" data-path="pages/Contact.js">
                    Yes! We offer scalable plans that work for organizations of all sizes, from startups to enterprise.
                  </p>
                </div>
                
                <div data-id="b628jflxa" data-path="pages/Contact.js">
                  <h4 className="text-md font-medium" data-id="hj6a6fvtz" data-path="pages/Contact.js">How is pricing structured?</h4>
                  <p className="text-gray-600 mt-1" data-id="uppp8huo1" data-path="pages/Contact.js">
                    Pricing is based on the number of users, risk categories tracked, and advanced features required.
                  </p>
                </div>
                
                <div className="pt-2" data-id="rmk2sgerk" data-path="pages/Contact.js">
                  <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center" data-id="ehewwu5wb" data-path="pages/Contact.js">
                    View all FAQs
                    <i className="fas fa-chevron-right ml-2 text-sm" data-id="npm45rl4u" data-path="pages/Contact.js"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}