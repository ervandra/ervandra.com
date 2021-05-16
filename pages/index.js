import Head from 'next/head';
import Image from 'next/image';
import profile from '../config/profile';
import Modal from 'react-modal';
import { useSetState } from '@ervandra/use-setstate';

import { subscribeForm } from '../libs/apis';

export default function Home() {
  const initialState = {
    isOpen: false,
    name: '',
    email: '',
    isLoading: false,
    isError: false,
    success: false,
  };
  const { state, setState } = useSetState(initialState);
  const { isOpen, name, email, isLoading, isError, success } = state;
  const handleSubmit = async e => {
    e.preventDefault();
    setState({ isLoading: true, isError: false, success: false });
    const payload = {
      lists: process.env.NEXT_PUBLIC_KE_LIST_ID,
      email,
      full_name: name,
      tags: 'free-strategy, via-api',
    };
    await subscribeForm(payload)
      .then(resp => {
        if (resp.status === 200) {
          setState({ success: true });
        }
      })
      .catch(err => {
        console.log('errors,', err);
        setState({ isError: true });
      })
      .finally(() => setState({ isLoading: false }));
  };
  return (
    <div>
      <Head>
        <title>Ervandra (IT Consultant): Claim Your Free Strategy Now!</title>
        <meta
          name="description"
          content="A one hour 1-on-1 IT consultation with Ervandra Halim to help your business with technical requirements to drive traffic, conversion and sales. Book your strategy session now."
        />
        <meta name="author" content={profile.name} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@ervandracom" key="twhandle" />
        <meta property="og:image" content="/images/cover.jpg" key="ogimage" />
        <meta property="og:site_name" content={`${profile.name}`} key="ogsitename" />
        <meta
          property="og:title"
          content={`Ervandra (IT Consultant): Claim Your Free Strategy Now!`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="A one hour 1-on-1 IT consultation with Ervandra Halim to help your business with technical requirements to drive traffic, conversion and sales. Book your strategy session now."
          key="ogdesc"
        />
      </Head>
      <div id="app-container">
        <div
          id="top"
          className="top-bar py-2 shadow-lg sticky-top"
          style={{ background: '#1f4662cc', backdropFilter: 'blur(5px)' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-center">
                  <h6 className="m-0 text-center text-light small me-3">
                    <strong className="text-warning">⚡️&nbsp; Attention</strong>&nbsp; Small
                    Business Owners, CEO(s), Entrepreneurs, Consultants
                  </h6>
                  <button
                    className="d-none d-md-block btn btn-warning small rounded-3 btn-sm py-1"
                    onClick={() => setState({ isOpen: true })}>
                    Claim Free Strategy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="content">
          <div id="hero" className="py-3 py-md-5">
            <div className="py-3 py-md-5">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="py-3 py-md-5">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <h1 className="text-center mb-4 display-3 fw-bold  lh-sm text-primary">
                            <strong className="highlight ">2021 Update!</strong> Upgrade{' '}
                            <strong>Your First (or Next) Website</strong> into{' '}
                            <strong>Sales Funnel..</strong>{' '}
                            <strong>
                              <u>Today!</u>
                            </strong>
                          </h1>
                          <h2 className="text-center text-danger fs-5">
                            <em>
                              Trusted by 19+ companies from Indonesia, Singapore, US, and Finland!
                            </em>
                          </h2>
                        </div>
                      </div>
                      <div className="hero-image text-center mb-5">
                        <Image
                          src="/images/hero-showcase.png"
                          alt="Showcase"
                          layout="responsive"
                          width="1447"
                          height="682"
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                          <div className="sponsors mb-5 text-center">
                            <Image
                              src="/images/sponsors.png"
                              alt="Sponsored"
                              width="1200"
                              height="75"
                              layout="responsive"
                              className="img-grayscale"
                            />
                          </div>
                          <h5 className="text-center mb-5 fs-6">
                            For 10+ years building <strong>website</strong> for{' '}
                            <strong>companies</strong> and <strong>clients</strong> (
                            <em>just like you</em>), we have found that{' '}
                            <strong>Sales Funnel</strong> is the principal key to{' '}
                            <strong>generate</strong> more{' '}
                            <strong>profits for all of businesses!</strong>
                          </h5>
                        </div>
                      </div>

                      <div
                        className="mb-2 text-center d-none d-md-block"
                        style={{ marginTop: '-2em' }}>
                        <Image
                          src="/images/arrow-bottom-2.svg"
                          width="100"
                          height="100"
                          layout="fixed"
                        />
                      </div>
                      <div className="button-container text-center">
                        <button
                          className="btn btn-primary btn-lg shadow-lg border-3 fw-bold p-3 px-5 text-uppercase"
                          onClick={() => setState({ isOpen: true })}>
                          ✅ Claim Your Free Strategy Call
                        </button>
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={() => setState({ isOpen: false })}
                        contentLabel="Modal"
                        className="reveal p-3 center small"
                        ariaHideApp={false}>
                        <div className="p-3">
                          {success ? (
                            <div className="p-0 text-center">
                              <h3 className="mb-3">Success</h3>
                              <button className="btn btn-primary">Close</button>
                            </div>
                          ) : (
                            <form onSubmit={handleSubmit} className="px-0 px-md-3">
                              <h3 className="text-center mb-4 fw-bold">
                                Fill out form below and{' '}
                                <strong className="text-primary">
                                  Claim Your Free Strategy Session
                                </strong>{' '}
                                Now.
                              </h3>
                              <div className="form-group mb-3">
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="Your Name:"
                                  value={name}
                                  disabled={isLoading}
                                  onChange={e => setState({ name: e.target.value })}
                                />
                              </div>
                              <div className="form-group mb-4">
                                <input
                                  type="email"
                                  className="form-control form-control-lg"
                                  placeholder="Your Email:"
                                  required
                                  disabled={isLoading}
                                  value={email}
                                  onChange={e => setState({ email: e.target.value })}
                                />
                              </div>
                              {isLoading ? (
                                <button
                                  type="button"
                                  className="btn btn-lg btn-secondary text-uppercase fw-bold shadow w-100">
                                  Submitting..
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  className="btn btn-lg btn-primary text-uppercase fw-bold shadow w-100">
                                  ✅ Claim Free Strategy
                                </button>
                              )}
                              <p className="mb-0 text-muted text-center mt-4">
                                Your privacy is protected
                              </p>
                            </form>
                          )}
                        </div>

                        <button
                          className="btn btn-close close-reveal"
                          onClick={() => setState({ isOpen: false })}>
                          &times;
                        </button>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="top-testimony" className="py-3 py-md-5">
            <div className="py-3 py-md-5">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-auto">
                    <div className="align-items-center mb-3 text-center">
                      <div
                        className="img-thumbnail rounded-circle mb-2 d-inline-block"
                        style={{ width: '90px', height: '90px' }}>
                        <Image
                          src="/images/testimonials/jussi-hurmola.jpg"
                          alt="Jussi Hurmola"
                          width="80"
                          className="rounded-circle m-0 d-block"
                          height="80"
                          layout="fixed"
                        />
                      </div>
                      <div className="testimony-header">
                        <h6 className="mb-0 fw-bold text-uppercase">Jussi Hurmola</h6>
                        <h6 className="mb-0 small">CEO & Founder Lifelearn Platform</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-auto">
                    <div className="testimony-content p-3 bg-gradient rounded-3 px-4 shadow-lg mb-0 position-relative">
                      <span
                        className="position-absolute h1 text-danger"
                        style={{ top: '-.5rem', left: '.5rem' }}>
                        &ldquo;
                      </span>
                      <p className="mb-0 fw-bold">
                        <em>
                          We decided to trust Ervan for his crazy strategies, and we never regret
                          it!
                          <br />I never thought sales funnel strategy could grow my new business in
                          just several months
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="what-you-get" className="py-3 py-md-5 bg-crown-light">
            <div className="py-3 py-md-5">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="py-3 py-md-5">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3">
                          <div className="text-center mb-3">
                            <Image
                              src="/images/strategy.svg"
                              layout="intrinsic"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-9">
                          <h2 className="mb-0 fs-5">
                            What You'll <strong>GET</strong>
                          </h2>
                          <h3 className="mb-3 text-primary fs-2">
                            During This <strong>Free Strategy Session</strong>
                          </h3>
                          <p className="mb-2">
                            We understand that both of our <strong>time</strong> are very{' '}
                            <strong>valuable</strong>, <br />
                            so we wouldn't waste any of your time as ours also precious.
                          </p>
                          <p className="mb-3">
                            We will break down our strategy call into these{' '}
                            <strong>3-easy steps</strong> <br />
                            that will help you to realize that your business need a better{' '}
                            <strong>sales funnel</strong>:
                          </p>
                        </div>
                      </div>
                      <div id="easy-steps" className="py-3 pt-5">
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <h3 className="mb-3 fw-bold fs-4 d-flex align-items-center justify-content-between border-bottom pb-3 border-2 border-primary text-primary">
                              1️⃣ Preparation
                              <span className="d-none d-md-block me-2">
                                <Image
                                  src="/images/arrow-right.svg"
                                  width="100"
                                  height="20"
                                  layout="fixed"
                                />
                              </span>
                            </h3>
                            <p>
                              Before we're going on call, you can prepare your website information,
                              conversion rate, and business model as we're going through the deepest
                              factor of your business: your sales funnel.
                            </p>
                            <span className="d-block d-md-none mb-2">
                              <Image
                                src="/images/arrow-bottom-2.svg"
                                width="100"
                                height="100"
                                layout="fixed"
                              />
                            </span>
                          </div>
                          <div className="col-12 col-md-4">
                            <h3 className="mb-3 fw-bold fs-4 d-flex justify-content-between align-items-center border-bottom pb-3 border-2 border-primary text-primary">
                              2️⃣ Consultation
                              <span className="d-none d-md-block me-2">
                                <Image
                                  src="/images/arrow-right-2.svg"
                                  width="100"
                                  height="20"
                                  layout="fixed"
                                />
                              </span>
                            </h3>
                            <p>
                              While we're on call, we will talk about your current situation and
                              your desired outcome that you want from us. I will help to simulate
                              your goals and insight within this call.
                            </p>
                            <span className="d-block d-md-none mb-2">
                              <Image
                                src="/images/arrow-bottom-2.svg"
                                width="100"
                                height="100"
                                layout="fixed"
                              />
                            </span>
                          </div>
                          <div className="col-12 col-md-4">
                            <h3 className="mb-3 fw-bold fs-4  border-bottom pb-3 border-2 border-primary text-primary">
                              3️⃣ Complete Review
                            </h3>
                            <p>
                              At the end of the call, i will give your step-by-step Framework that
                              you can follow immediately to start upgrade your business, in this
                              case your website into brand new sales funnel that will generate
                              profits and grow your business to the next level.{' '}
                            </p>
                            <div className="mb-0 text-start d-none d-md-block">
                              <Image
                                src="/images/arrow-bottom-3.svg"
                                width="100"
                                height="91"
                                layout="fixed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <Image
                          src="/images/chart.svg"
                          width="1584"
                          height="396"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="about-ervan" className="py-3 py-md-5 bg-crown-dark">
            <div className="py-3 py-md-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8">
                    <div className="py-3 py-md-5 text-center text-light">
                      <div className="about-ervan-image mb-3">
                        <div
                          className="img-thumbnail d-inline-block rounded-circle shadow"
                          style={{ width: '120px', height: '120px' }}>
                          <Image
                            src="/images/ervan.jpg"
                            alt="Ervandra Halim"
                            className="rounded-circle"
                            width="110"
                            height="110"
                            layout="responsive"
                          />
                        </div>
                      </div>
                      <h2 className="mb-0 fs-6">About </h2>
                      <h3 className="mb-3 fs-2">
                        <strong>Ervandra Halim ⚡️</strong>
                      </h3>
                      <p>
                        Ervan has helped his valuable partners and client across the globe for 10+
                        years in Website & Apps Development and Digital Marketing Strategies.
                      </p>

                      <p>
                        Currently he's on a mission to help small business to leverage Sales Funnel
                        to grow their business and reach the next level.
                      </p>

                      <p>
                        He's a very technical-guy, and his solution will always work at a higher
                        level of implementation, he will be your first (or next) Tech Lead
                        Consultant.
                      </p>

                      <p>
                        His clients admire him for his innovative and proactive way to deliver
                        results.
                      </p>

                      <p>And yes, he's always #overdeliver!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="recommended" className="py-3 py-md-5">
            <div className="py-3 py-md-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col">
                    <div className="py-3 py-md-5">
                      <div className="text-center mb-3">
                        <Image
                          src="/images/emoji-pixie.png"
                          layout="intrinsic"
                          width="120"
                          height="43"
                        />
                      </div>
                      <h2 className="mb-0 text-center fs-5">Why'd They Recommend</h2>
                      <h3 className="mb-5 fs-2 text-center text-primary">
                        <strong>Work With Ervan?</strong>
                      </h3>
                      <p className="mb-5 text-center">
                        My partner and valuable clients will tell you their experiences work with
                        me.
                      </p>

                      <div id="client-testimony">
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <div className="testimony-item mb-3">
                              <div className="card  bg-transparent bg-gradient shadow-lg border-0  rounded-3">
                                <div className="card-body p-4">
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="img-thumbnail rounded-circle me-3"
                                      style={{ width: '72px', flexBasis: '72px', flexShrink: 0 }}>
                                      <Image
                                        src="/images/testimonials/donny-riantori.jpg"
                                        alt="Donny Riantori"
                                        width="72"
                                        height="72"
                                        layout="responsive"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-auto">
                                      <h3 className="mb-1 fs-6 fw-bold">Donny Riantori</h3>
                                      <h4 className=" mb-0 fs-6">
                                        <small>
                                          Co-founder & CTO - Gomodo Technologies Pte Ltd
                                        </small>
                                      </h4>
                                    </div>
                                  </div>

                                  <p className="lh-2 small mb-0 mt-3">
                                    <em>
                                      Ervandra is an extraordinary software engineer, he always
                                      comes with a great solution, practical and impactful for any
                                      result of his project, you will find "engineering thinking",
                                      lives on this very talented guy, not only on his work but also
                                      on every process that he takes.
                                    </em>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="testimony-item mb-3">
                              <div className="card bg-transparent bg-gradient shadow-lg border-0 rounded-3">
                                <div className="card-body p-4">
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="img-thumbnail rounded-circle me-3"
                                      style={{ width: '72px', flexBasis: '72px', flexShrink: 0 }}>
                                      <Image
                                        src="/images/testimonials/erick-liemarga.jpg"
                                        alt="Erick Liemarga"
                                        width="72"
                                        height="72"
                                        layout="responsive"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-auto">
                                      <h3 className="mb-1 fs-6 fw-bold">Erick Liemarga</h3>
                                      <h4 className="fs-6 mb-0">
                                        <small>Chief Product Officer - LABABOOK</small>
                                      </h4>
                                    </div>
                                  </div>

                                  <p className="lh-2 small mb-0 mt-3">
                                    <em>
                                      If you're looking for a versatile frontend web developer I'll
                                      definitely recommend Ervandra right away. Several qualities of
                                      him that I could easily recommend are; Open minded, critical
                                      thinking, resourceful and always look for improvement. He's
                                      always work really hard to improve and expand his knowledge.
                                    </em>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="testimony-item mb-3">
                              <div className="card bg-transparent bg-gradient shadow-lg border-0 rounded-3">
                                <div className="card-body p-4">
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="img-thumbnail rounded-circle me-3"
                                      style={{ width: '72px', flexBasis: '72px', flexShrink: 0 }}>
                                      <Image
                                        src="/images/testimonials/jussi-hurmola.jpg"
                                        alt="Jussi Hurmola"
                                        width="72"
                                        height="72"
                                        layout="responsive"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-auto">
                                      <h3 className="mb-1 fs-6 fw-bold">Jussi Hurmola</h3>
                                      <h4 className="fs-6 mb-0">
                                        <small>
                                          Chief Executive Office - LifeLearn Holdings Pte Ltd
                                        </small>
                                      </h4>
                                    </div>
                                  </div>

                                  <p className="lh-2 small mb-0 mt-3">
                                    <em>
                                      Ervandra is a very special person for us. He always
                                      overdeliver his services, even without being asked! He saved
                                      us multiple times due to our primitive and outdated backend
                                      system, he provide quick and working solutions. Indeed, our
                                      most valuable person regarding to technology, especially web
                                      applications.
                                    </em>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="bottom-content"
            className="bg-gradient py-3 py-md-5 border-0 mb-0"
            style={{ background: '#d2dae066 shadow-inset-lg' }}>
            <div className="py-3 py-md-5">
              <div className="container">
                <div className="row g-3 justify-content-center align-items-center">
                  <div className="col-12 col-md-4">
                    <div className="mb-3">
                      <Image
                        src="/images/showcase-bottom.png"
                        layout="responsive"
                        width="727"
                        height="914"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <h2 className=" mb-0 fs-5 text-center text-md-start">
                      What are you waiting for? Let’s Improve{' '}
                    </h2>
                    <h3 className="fs-2 mb-3 text-primary text-center text-md-start">
                      <strong>Your Business</strong> with{' '}
                      <strong>
                        <u>Sales Funnel!</u>
                      </strong>
                    </h3>
                    <div className="alert my-3 alert-success shadow">
                      <h6 className="mb-0">
                        On <strong>June 2021</strong>, i have <strong>1</strong> available slot for
                        your project.
                      </h6>
                    </div>
                    <p className=" mb-5 text-center text-md-start">
                      My available slot is <u>limited</u> every month to ensure my Highest-Quality
                      so you will get none but the best experience ever to achieve your goals faster
                      and easier.
                    </p>
                    <div className="button-container text-center text-md-start">
                      <button
                        className="btn btn-primary btn-lg shadow-lg border-3 fw-bold text-uppercase"
                        onClick={() => setState({ isOpen: true })}>
                        ✅ Claim Your Free Strategy Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="py-3 bg-dark bg-gradient">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center copyright">
                  <p className="mb-0 small d-flex align-items-center justify-content-center text-light">
                    <span>
                      &copy;2012-{new Date().getFullYear()} <strong>EH Marketing</strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
