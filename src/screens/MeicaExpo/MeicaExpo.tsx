import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { HiMenu } from "react-icons/hi";

// Custom hook to detect screen size
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = React.useState(() => window.innerWidth >= 1024);
  React.useEffect(() => {
    const onResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isLarge;
}

export const MeicaExpo = (): JSX.Element => {
  // Navigation items
  const navItems = [
    "CONFERENCE",
    "ABOUT EVENT",
    "PARTICIPATION",
    "EXHIBITIONS",
    "AWARDS",
    "CONTACT US",
  ];

  // Participation options data
  const participationOptions = [
    {
      title: "Exhibitors",
      description:
        "Showcase your latest products and innovations to a targeted audience, gain valuable leads, and boost brand visibility at the industry's leading exhibition.",
      bgClass: "bg-[url(/rectangle-1-2.svg)]",
      position: "top-[2506px] left-[73px]",
    },
    {
      title: "REGISTER NOW",
      titleClass: "font-bold text-[#043b48]",
      subtitleClass: "font-extralight text-[#043b48]",
      isRegister: true,
      bgClass: "bg-[#d9d9d9] rounded-[15px]",
      position: "top-[2506px] left-[350px]",
    },
    {
      title: "Speakers",
      description:
        "Share your expertise on a prestigious platform, influence industry trends, and engage with a diverse audience of professionals and leaders.",
      bgClass: "bg-[#d9d9d9] rounded-[15px]",
      position: "top-[2506px] left-[627px]",
    },
    {
      title: "Sponsors",
      description:
        "Maximize your brand exposure, position your company as a market leader, and connect with decision-makers through high-impact sponsorship opportunities.",
      bgClass: "bg-[url(/rectangle-1-1.svg)]",
      position: "top-[2703px] left-[350px]",
    },
    {
      title: "Visitors",
      description:
        "Explore cutting-edge solutions, network with industry experts, and gain insights from thought-provoking sessions—all in one dynamic event.",
      bgClass: "bg-[url(/rectangle-1.svg)]",
      position: "top-[2703px] left-[903px]",
    },
    {
      title: "Delegates",
      description:
        "Enhance your knowledge, build strategic connections, and discover actionable ideas to drive success in your field by attending insightful sessions and networking events.",
      bgClass: "bg-[url(/vector.svg)]",
      position: "top-[2703px] left-[1181px]",
    },
    {
      title: "Media",
      description:
        "Gain exclusive access to industry leaders, expand your audience reach, and enhance your brand's visibility by partnering with us as an official media partner for the event.",
      bgClass: "bg-[#d9d9d9] rounded-[15px]",
      position: "top-[2870px] left-[627px]",
    },
  ];

  // Feature boxes data
  const featureBoxes = [
    {
      title: (
        <>
          <span className="font-bold">PROCESS </span>
          <span className="font-light">
            <br />
            AUTOMATION
          </span>
        </>
      ),
      imgSrc: "/rectangle-500034.png",
      position: "top-[494px]",
    },
    {
      title: (
        <>
          <span className="font-bold">INDUSTRIAL </span>
          <span className="font-light">CYBERSECURITY</span>
        </>
      ),
      imgSrc: "/rectangle-500036.png",
      position: "top-[592px]",
    },
    {
      title: (
        <>
          <span className="font-bold">INSTRUMENTATION</span>
          <span className="font-medium">&nbsp;</span>
          <span className="font-extralight">
            <br />
            CONTROL{" "}
          </span>
        </>
      ),
      imgSrc: "/rectangle-500035.png",
      position: "top-[689px]",
    },
  ];

  // Key participating organizations
  const keyOrganizations = [
    "/untitled-2-17-12.png",
    "/untitled-2-17-11.png",
    "/untitled-2-17-10.png",
    "/untitled-2-17-9.png",
    "/untitled-2-17-8.png",
    "/untitled-2-17-7.png",
  ];

  const isLargeScreen = useIsLargeScreen();
  const [navOpen, setNavOpen] = useState(false);
  const [conferenceOpen, setConferenceOpen] = useState(false);

  if (isLargeScreen) {
    // Render the current (unchanged) layout for large screens
    return (
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1512px] h-[3265px] relative">
          {/* Header */}
          <div className="absolute w-[1464px] h-[190px] top-8 left-7">
            <div className="absolute w-[1464px] h-[170px] top-0 left-0">
              <div className="relative w-[1456px] h-[170px] rounded-lg">
                <Card className="absolute w-[1456px] h-[170px] top-0 left-0 rounded-lg shadow-[0px_0px_4px_#737373]">
                  <CardContent className="p-0">
                    <div className="absolute w-[166px] h-[38px] top-[58px] left-[1258px] rounded-[10px] [background:linear-gradient(90deg,rgba(16,162,201,1)_0%,rgba(0,52,92,1)_100%)] flex items-center justify-center cursor-pointer">
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[16.4px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                        REGISTRATIONS
                      </div>
                    </div>

                    <img
                      className="absolute w-[252px] h-[68px] top-[43px] left-[582px]"
                      alt="Csc"
                      src="/csc-8-1.png"
                    />

                    <div className="absolute w-[38px] h-[38px] top-[58px] left-[1197px] bg-[#00345c] rounded-[18.88px] flex items-center justify-center cursor-pointer">
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[16.4px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                        EN
                      </div>
                    </div>

                    <div className="absolute w-[38px] h-[38px] top-[58px] left-[1155px] rounded-[18.88px] border-[2.52px] border-solid border-[#00345c] flex items-center justify-center cursor-pointer">
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-[#00345c] text-[16.4px] text-left tracking-[0] leading-[15.4px] whitespace-nowrap [direction:rtl]">
                        عر
                      </div>
                    </div>

                    <div className="absolute top-[21px] left-[670px] [font-family:'Inter',Helvetica] font-semibold text-[#0889a5] text-[13.4px] tracking-[-0.13px] leading-[15.3px] whitespace-nowrap">
                      HOSTED BY
                    </div>

                    <img
                      className="absolute w-[336px] h-[78px] top-[33px] left-8 object-cover"
                      alt="Meica EXPO LOGO"
                      src="/meica-expo-logo-1.png"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col w-[1371px] h-[41px] items-start gap-2.5 px-[249px] py-3.5 absolute top-[149px] left-[53px] bg-[#0889a5] rounded-lg relative">
              <div className="relative w-full h-[13px] flex flex-row items-center justify-start">
                {navItems.map((item, index) => {
                  if (item === "CONFERENCE") {
                    return (
                      <div
                        key={index}
                        className="relative flex items-center h-full"
                        style={{ marginLeft: index === 0 ? 0 : 40 }}
                        onMouseEnter={() => setConferenceOpen(true)}
                        onMouseLeave={() => setConferenceOpen(false)}
                        onFocus={() => setConferenceOpen(true)}
                        onBlur={() => setConferenceOpen(false)}
                        tabIndex={0}
                      >
                        <Button
                          variant="link"
                          className="[font-family:'Inter',Helvetica] font-semibold text-white text-[14.1px] flex items-center gap-1 group hover:text-[#00345c] hover:no-underline focus:no-underline p-0 h-auto"
                          style={{ height: "100%" }}
                        >
                          <span>CONFERENCE</span>
                          <span className="ml-0.5 text-xs transition-colors text-white group-hover:text-[#00345c]" style={{ fontSize: '10px' }}>▼</span>
                        </Button>
                      </div>
                    );
                  }
                  // Other nav items
                  return (
                    <Button
                      key={index}
                      variant="link"
                      className="[font-family:'Inter',Helvetica] font-semibold text-white text-[14.1px] tracking-[0] leading-[12.9px] whitespace-nowrap p-0 h-auto hover:text-[#00345c] hover:no-underline focus:no-underline"
                      style={{ marginLeft: index === 0 ? 0 : 40 }}
                    >
                      {item}
                    </Button>
                  );
                })}
                {/* Dropdown Overlay - outside nav items, full navbar width */}
                {conferenceOpen && (
                  <div
                    className="absolute top-full z-50 flex"
                    style={{
                      left: 0,
                      width: '1000px',
                      marginRight: '153px', // aligns with navbar's left-[53px]
                      minHeight: 140,
                    }}
                    onMouseEnter={() => setConferenceOpen(true)}
                    onMouseLeave={() => setConferenceOpen(false)}
                  >
                    <div className="w-full bg-white shadow-xl rounded-md border flex p-0 mt-2 overflow-hidden">
                      <div className="grid grid-cols-3 w-full">
                        {/* First column: 1 item, vertically centered */}
                        <div className="flex flex-col justify-center items-start h-full px-8 py-6">
                          <div className="text-[#0889a5] font-bold text-[18px]">
                            CONFERENCE
                            <div className="font-normal text-[#0889a5] text-[13px] mt-1">
                              MEICA EXPO 2025 Was The First<br />
                              Instrumentation Control And Automation Expo In
                            </div>
                          </div>
                        </div>
                        {/* Second column: 2 items */}
                        <div className="flex flex-col gap-4 px-8 py-6">
                          {[1, 2].map((i) => (
                            <div
                              key={i}
                              className="cursor-pointer transition-colors text-[#0889a5] font-bold text-[18px] hover:bg-[#e8f5fb] px-2 py-2 rounded"
                            >
                              CONFERENCE
                              <div className="font-normal text-[#0889a5] text-[13px] mt-1">
                                MEICA EXPO 2025 Was The First<br />
                                Instrumentation Control And Automation Expo In
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Third column: 2 items */}
                        <div className="flex flex-col gap-4 px-8 py-6">
                          {[3, 4].map((i) => (
                            <div
                              key={i}
                              className="cursor-pointer transition-colors text-[#0889a5] font-bold text-[18px] hover:bg-[#e8f5fb] px-2 py-2 rounded"
                            >
                              CONFERENCE
                              <div className="font-normal text-[#0889a5] text-[13px] mt-1">
                                MEICA EXPO 2025 Was The First<br />
                                Instrumentation Control And Automation Expo In
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Banner */}
          <div className="absolute w-[1392px] h-[781px] top-[638px] left-[60px]">
            <img
              className="absolute w-[1392px] h-[780px] top-0 left-0"
              alt="Vector"
              src="/vector-3.png"
            />

            <div className="absolute w-[209px] h-[42px] top-[35px] left-[1149px]">
              <div className="absolute w-[161px] h-9 top-[3px] left-12">
                <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[19.6px] tracking-[0] leading-[18.4px] whitespace-nowrap">
                  SEP 16-18, 2025
                </div>

                <div className="absolute top-[17px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[19.6px] tracking-[0] leading-[18.4px] whitespace-nowrap">
                  ABU DHABI, UAE
                </div>
              </div>

              <img
                className="absolute w-[42px] h-[42px] top-0 left-0"
                alt="Ellipse"
                src="/ellipse-64.svg"
              />
            </div>

            {/* Navigation dots */}
            {[0, 1, 2, 3].map((index) => (
              <Button
                key={index}
                variant="outline"
                className={`absolute w-10 h-10 top-[${
                  115 + index * 48
                }px] left-[1317px] bg-white rounded-lg -rotate-180`}
                style={{ top: `${115 + index * 48}px` }}
              />
            ))}

            {/* Feature boxes */}
            {featureBoxes.map((feature, index) => (
              <div
                key={index}
                className={`absolute w-[597px] h-[92px] ${feature.position} left-[795px]`}
              >
                <img
                  className="absolute w-[597px] h-[92px] top-0 left-0"
                  alt="Rectangle"
                  src={feature.imgSrc}
                />
                <div
                  className={`absolute w-[398px] top-[${15}px] left-[23px]`}
                  style={{ top: "15px" }}
                >
                  <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[32.4px] tracking-[0] leading-[29.9px] z-10">
                    {feature.title}
                  </div>
                </div>
              </div>
            ))}

            <img
              className="absolute w-[145px] h-[145px] top-2.5 left-[11px] object-cover"
              alt="Group"
              src="/group-15054-1-1.png"
            />
          </div>

          {/* About section */}
          <div className="absolute w-[819px] top-[322px] left-[567px] [font-family:'Inter',Helvetica] font-light text-[#00345c] text-[15px] tracking-[-0.15px] leading-[17.1px]">
            MEICA EXPO 2025 WAS THE FIRST INSTRUMENTATION CONTROL AND AUTOMATION
            EXPO IN MIDDLE EAST. THE EVENT WILL FEATURE TECHNOLOGIES FROM GCC AND
            ALL OVER THE WORLD THAT WILL HELP OIL &amp; GAS PRODUCERS, POWER
            GENERATORS ETC. TO ENHANCE AND IMPROVE PROCESS EFFICIENCY, SAFETY AND
            INCULCATE BETTER CYBERSECURITY PRACTICES.
            <br />
            <br />
            MEICA EXPO 2025 IN IT&#39;S 6TH EDITION HAS BECOME A HIGH-NET-WORTH
            TECHNICAL EXPO WITH THE LATEST INNOVATIONS AVAILABLE IN THE MARKET TO
            SHOWCASE THE IMPORTANCE OF THE CURRENT NEED TODAY AND TO ADAPT THE
            BEST PRACTICES TO BENCHMARK THE COST-EFFECTIVE METHODS THAT WILL
            ENLIGHTEN THE END USERS AND OPERATORS. THE EXPO WILL PROVIDE A
            PLATFORM TO CONNECT WITH BOTH REGIONAL AND INTERNATIONAL EXPERTS,
            FOCUSING ON ALL ASPECTS OF PRODUCTION, MANUFACTURING AND PROCESSING
            ENTITIES IN THE WIDER WORLD.
          </div>

          <div className="absolute w-[418px] top-[322px] left-[71px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[39px] tracking-[0] leading-[39.0px]">
            <span className="font-light text-[#0889a5] leading-[36.7px]">
              MIDDLE EAST
            </span>

            <span className="font-light text-[#0889a5] text-[35.3px] leading-[33.1px]">
              {" "}
              <br />
            </span>

            <span className="font-bold text-[#0889a5] text-[40px] leading-[37.6px]">
              INSTRUMENTATION,
              <br />
              CYBERSECURITY &amp;
              <br /> AUTOMATION <br />
            </span>

            <span className="font-light text-[#0889a5] text-[40px] leading-[37.6px]">
              EXPO
            </span>
          </div>

          {/* Official Invitation Section */}
          <div className="absolute w-[1334px] h-[637px] top-[1520px] left-[45px]">
            <div className="w-[1164px] top-0 text-[#0889a50d] leading-[174px] absolute left-0 [font-family:'Inter',Helvetica] font-semibold text-[227.2px] tracking-[0]">
              MEICA EXPO
            </div>

            <img
              className="absolute w-[1216px] h-[459px] top-[178px] left-[118px]"
              alt="Subtract"
              src="/subtract.svg"
            />

            <div className="absolute w-[255px] h-[249px] top-[227px] left-[1001px] bg-[#00345c] rounded-[30px_30.96px_30.96px_30.96px] rotate-90" />

            <img
              className="absolute w-[347px] h-[360px] top-[121px] left-[934px]"
              alt="Eng salem al blooshi"
              src="/eng-salem-al-blooshi--1--removebg-preview-1.png"
            />

            <div className="absolute w-[1068px] top-[22px] left-[152px] [font-family:'Roboto',Helvetica] font-normal text-[#00345c] text-[58.5px] text-right tracking-[0] leading-[52.0px]">
              <span className="font-bold">
                OFFICIAL INVITATION
                <br />
              </span>

              <span className="[font-family:'Roboto',Helvetica] font-normal text-[#00345c] text-[58.5px] tracking-[0] leading-[52.0px]">
                MEICA EXPO 2025 6TH EDITION
              </span>
            </div>

            <div className="absolute w-[237px] h-[25px] top-[495px] left-[1002px] [font-family:'Inter',Helvetica] font-semibold text-[#00345c] text-[15.5px] tracking-[0] leading-[14.6px]">
              SALEM AL BLOOSH
            </div>

            <div className="absolute w-[279px] h-[45px] top-[530px] left-[1002px] [font-family:'Inter',Helvetica] font-semibold text-[#19ae93] text-[15.5px] tracking-[0] leading-[14.6px]">
              MANAGER INDUSTRIAL MAINTENANCE (INSTRUMENTATION)
            </div>

            <div className="absolute w-56 h-[15px] top-[585px] left-[1002px] [font-family:'Inter',Helvetica] font-semibold text-[#00345c] text-[15.5px] tracking-[0] leading-[14.6px]">
              ADNOC DISTRIBUTION
            </div>

            <div className="absolute w-[108px] h-[108px] top-[391px] left-[1185px] bg-white rounded-[53.94px] border border-solid border-[#00345c] rotate-[105.35deg]" />

            {/* Invitation text paragraphs */}
            {[0, 1].map((index) => (
              <div
                key={index}
                className={`absolute w-[735px] top-[${
                  255 + index * 158
                }px] left-[184px] [font-family:'Inter',Helvetica] font-normal text-[#074f63] text-[15.1px] tracking-[0] leading-[17.0px]`}
                style={{ top: `${255 + index * 158}px` }}
              >
                ON BEHALF OF THE EXECUTIVE COMMITTEE, I WOULD LIKE TO INVITE YOU
                TO ATTEND AND PARTICIPATE AT THE 6TH ANNUAL MIDDLE EAST
                INSTRUMENTATION CYBERSECURITY AND AUTOMATION EXPO. THE EVENT IS
                SCHEDULED TO TAKE PLACE ON 16TH – 18TH SEPTEMBER 2025 IN ABU
                DHABI, UAE. THE UPCOMING EVENT WILL GATHER THE TECHNICAL EXPERTS
                FROM ALL OVER THE WORLD TO DISCUSS THE LATEST TECHNOLOGY RELATED
                TO INSTRUMENTATION CONTROL, INDUSTRIAL CYBERSECURITY AND PROCESS
                AUTOMATION FROM VARIOUS INDUSTRIES TO NETWORK WITH KEY INDUSTRY
                PEERS. THE FORUM WILL ENHANCE COMMUNICATION AND HELP IN EXCHANGING
                KNOWLEDGE BETWEEN THE MAJOR STAKEHOLDERS.
              </div>
            ))}
          </div>

          {/* Key Participating Organizations */}
          <div className="absolute w-[1392px] h-[124px] top-[2267px] left-[66px] rounded-[15px] bg-[linear-gradient(90deg,_#0889A5_-29.2%,_#F5F5F5_36.46%)]">
            <div className="absolute w-[400px] top-[30px] left-[53px] [font-family:'Inter',Helvetica] font-bold text-white text-[26.5px] tracking-[0] leading-[30.0px]">
              KEY PARTICIPATING ORGANIZATIONS
            </div>

            {keyOrganizations.map((logo, index) => (
              <img
                key={index}
                className={`w-[100px] absolute h-[86px] top-[19px]`}
                style={{
                  left: `${539 + index * 150}px`,
                  width:
                    index === 0
                      ? "109px"
                      : index === 1
                      ? "99px"
                      : index === 2
                      ? "85px"
                      : index === 3
                      ? "79px"
                      : index === 4
                      ? "97px"
                      : "82px",
                }}
                alt="Organization logo"
                src={logo}
              />
            ))}
          </div>

          {/* How can you participate section */}
          <div className="absolute w-[497px] top-[2532px] left-[930px] [font-family:'Inter',Helvetica] font-normal text-[#19ae93] text-[59px] tracking-[0] leading-[55.4px]">
            <span className="font-semibold">HOW CAN YOU <br /></span>
            <span className="font-extralight">PARTICIPATE</span>
          </div>

          {/* Participation options */}
          {participationOptions.map((option, index) => (
            <Card
              key={index}
              className={`absolute w-[259px] h-[173px] ${option.position} ${option.bgClass}`}
            >
              <CardContent className="p-0">
                {option.isRegister ? (
                  <div className="absolute w-[236px] top-[30px] left-3 [font-family:'Inter',Helvetica] font-normal text-transparent text-[45.6px] tracking-[0] leading-[43.7px]">
                    <span className={option.titleClass}>REGISTER </span>
                    <span className={option.subtitleClass}>NOW</span>
                  </div>
                ) : (
                  <>
                    <div
                      className={`absolute top-[131px] left-[11px] [font-family:'Inter',Helvetica] font-semibold text-neutral-500 text-[37.3px] tracking-[0] leading-[28.6px] whitespace-nowrap`}
                    >
                      {option.title}
                    </div>
                    {option.description && (
                      <div
                        className={`absolute w-[235px] top-[180px] left-[11px] [font-family:'Inter',Helvetica] font-normal text-black text-[11.4px] text-center tracking-[0] leading-[normal]`}
                      >
                        {option.description}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Background elements */}
          <div className="absolute w-[2681px] h-[2560px] top-[5375px] left-[-542px]">
            {/* These are decorative background elements with ellipses */}
            {/* Keeping them as is since they're purely decorative */}
            <div className="absolute w-[2088px] h-[1447px] top-[1113px] left-[593px]">
              <div className="top-[665px] text-[#ffffff1a] leading-[217.7px] whitespace-nowrap absolute left-0 [font-family:'Inter',Helvetica] font-semibold text-[227.2px] tracking-[0]">
                MEICA EXPO
              </div>
              {/* Ellipses and decorative elements */}
              <div className="absolute w-[1181px] h-[1181px] top-[133px] left-[774px] rotate-[-75deg]">
                {/* Complex nested decorative elements */}
              </div>
            </div>
            <div className="absolute w-[1181px] h-[1181px] top-[133px] left-[133px] rotate-[-75deg]">
              {/* More decorative elements */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Responsive layout for small and medium screens
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-screen-md px-2 sm:px-4">
        {/* Header */}
        <div className="w-full flex flex-col items-center py-4 relative">
          <img className="w-40 mb-2" src="/meica-expo-logo-1.png" alt="Meica EXPO LOGO" />
          <div className="flex flex-row items-center gap-2 mb-2">
            <img className="w-20" src="/csc-8-1.png" alt="Csc" />
            <span className="text-[#0889a5] text-xs font-semibold">HOSTED BY</span>
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-8 h-8 bg-[#00345c] rounded-full flex items-center justify-center text-white text-xs">EN</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#00345c] flex items-center justify-center text-[#00345c] text-xs">عر</div>
            <div className="w-24 h-8 rounded bg-gradient-to-r from-[#10a2c9] to-[#00345c] flex items-center justify-center text-white text-xs font-semibold">REGISTRATIONS</div>
          </div>
          {/* Hamburger menu icon */}
          <button className="absolute right-2 top-2 md:right-4 md:top-4 block lg:hidden" onClick={() => setNavOpen((v) => !v)}>
            <HiMenu className="w-8 h-8 text-[#0889a5]" />
          </button>
        </div>
        {/* Responsive Navbar */}
        {navOpen && (
          <div className="w-full flex flex-col items-center bg-[#0889a5] rounded-lg py-2 mb-4 z-50">
            {navItems.map((item, index) => (
              <Button key={index} variant="link" className="text-white font-semibold text-sm w-full py-1">
                {item}
              </Button>
            ))}
          </div>
        )}
        {/* Heading Section (add this after navbar, before about text) */}
        <div className="w-full mb-2 text-center">
          <span className="block font-light text-[#0889a5] text-xl">MIDDLE EAST</span>
          <span className="block font-bold text-[#0889a5] text-2xl leading-tight">INSTRUMENTATION, CYBERSECURITY & AUTOMATION<br />EXPO</span>
        </div>
        {/* About Section (always visible in sm/md) */}
        <div className="w-full mb-4 text-[#00345c] text-xs">
          MEICA EXPO 2025 was the first Instrumentation Control and Automation Expo in Middle East. The event will feature technologies from GCC and all over the world that will help Oil & Gas Producers, Power Generators etc. to enhance and Improve Process Efficiency, Safety and inculcate better cybersecurity practices.<br /><br />
          MEICA EXPO 2025 in it's 6th edition has become a high-net-worth technical expo with the latest innovations available in the market to showcase the importance of the current need today and to adapt the best practices to benchmark the cost-effective methods that will enlighten the end users and operators. The expo will provide a platform to connect with both regional and international experts, focusing on all aspects of production, manufacturing and processing entities in the wider world.
        </div>
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center mb-4 relative">
          <div className="w-full relative overflow-hidden">
            <img className="w-full rounded-lg my-4" src="/vector-3.png" alt="Banner" />
            {/* Overlay feature boxes at bottom right, as in large screen */}
            <div className="absolute bottom-3 right-3 flex flex-col gap-1 w-1/2 pr-1 pb-1">
              {featureBoxes.map((feature, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden h-8 flex items-center"
                  style={{ backgroundImage: `url(${feature.imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg" />
                  <div className="relative z-10 text-white text-[10px] font-bold px-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="font-semibold text-[#0889a5] text-sm">SEP 16-18, 2025</div>
            <div className="font-semibold text-[#0889a5] text-sm">ABU DHABI, UAE</div>
          </div>
        </div>
        {/* Feature Boxes */}
        <div className="w-full flex flex-col gap-2 mb-4">
          {featureBoxes.map((feature, index) => (
            <div key={index} className="w-full flex flex-row items-center gap-2 bg-[#0889a5] rounded-lg p-2">
              <img className="w-16 h-16 rounded" src={feature.imgSrc} alt="Feature" />
              <div className="text-white text-base font-bold">{feature.title}</div>
            </div>
          ))}
        </div>
        {/* Official Invitation Section */}
        <div className="w-full bg-[#e8f5fb] rounded-lg p-4 mb-4 flex flex-col items-center">
          <div className="text-[#00345c] text-lg font-bold mb-2 text-center">OFFICIAL INVITATION</div>
          <div className="text-[#00345c] text-base mb-2 text-center">MEICA EXPO 2025 6TH EDITION</div>
          <img className="w-32 h-32 rounded-full mb-2" src="/eng-salem-al-blooshi--1--removebg-preview-1.png" alt="Eng salem al blooshi" />
          <div className="text-[#00345c] text-xs font-semibold">SALEM AL BLOOSH</div>
          <div className="text-[#19ae93] text-xs font-semibold">MANAGER INDUSTRIAL MAINTENANCE (INSTRUMENTATION)</div>
          <div className="text-[#00345c] text-xs font-semibold mb-2">ADNOC DISTRIBUTION</div>
          <div className="text-[#074f63] text-xs text-center">
            ON BEHALF OF THE EXECUTIVE COMMITTEE, I WOULD LIKE TO INVITE YOU TO ATTEND AND PARTICIPATE AT THE 6TH ANNUAL MIDDLE EAST INSTRUMENTATION CYBERSECURITY AND AUTOMATION EXPO. THE EVENT IS SCHEDULED TO TAKE PLACE ON 16TH – 18TH SEPTEMBER 2025 IN ABU DHABI, UAE. THE UPCOMING EVENT WILL GATHER THE TECHNICAL EXPERTS FROM ALL OVER THE WORLD TO DISCUSS THE LATEST TECHNOLOGY RELATED TO INSTRUMENTATION CONTROL, INDUSTRIAL CYBERSECURITY AND PROCESS AUTOMATION FROM VARIOUS INDUSTRIES TO NETWORK WITH KEY INDUSTRY PEERS. THE FORUM WILL ENHANCE COMMUNICATION AND HELP IN EXCHANGING KNOWLEDGE BETWEEN THE MAJOR STAKEHOLDERS.
          </div>
        </div>
        {/* Key Participating Organizations */}
        <div className="w-full bg-gradient-to-r from-[#0889A5] to-[#F5F5F5] rounded-lg p-4 mb-4">
          <div className="text-white text-base font-bold mb-2">KEY PARTICIPATING ORGANIZATIONS</div>
          <div className="grid grid-cols-2 gap-2">
            {keyOrganizations.map((logo, index) => (
              <img key={index} className="w-full h-12 object-contain" src={logo} alt="Organization logo" />
            ))}
          </div>
        </div>
        {/* Participation Section */}
        <div className="w-full mb-4">
          <div className="text-[#19ae93] text-xl font-bold text-center mb-2">HOW CAN YOU PARTICIPATE</div>
          <div className="grid grid-cols-1 gap-2">
            {participationOptions.map((option, index) => (
              <Card key={index} className={`w-full bg-[#d9d9d9] rounded-[15px]`}>
                <CardContent className="p-2">
                  {option.isRegister ? (
                    <div className="text-center">
                      <span className={option.titleClass}>REGISTER </span>
                      <span className={option.subtitleClass}>NOW</span>
                    </div>
                  ) : (
                    <>
                      <div className="text-neutral-500 text-base font-semibold mb-1">{option.title}</div>
                      {option.description && (
                        <div className="text-black text-xs">{option.description}</div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
