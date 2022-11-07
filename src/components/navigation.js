import React from "react";


const Navigation = () => {
  return (
    <nav id="site-navigation" className="main-navigation clearfix" role="navigation">
    <div className="inner-wrap clearfix">
      <div className="search-random-icons-container">
        <div className="top-search-wrap">
          <i className="fa fa-search search-top" />
          <div className="search-form-top">
            <form action="https://www.shongshoy.com/" className="search-form searchform clearfix" method="get" role="search">
              <div className="search-wrap">
                <input type="search" className="s field" name="s" defaultValue placeholder="Search" />
                <button className="search-icon" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="menu-toggle" />
      <div className="menu-primary-container">
        <ul id="menu-home" className="menu">
          <li id="menu-item-16686" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16686"><a href="https://www.shongshoy.com" aria-current="page">মূলপাতা</a></li>
          <li id="menu-item-2921" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2921"><a href="https://www.shongshoy.com/history/">ইতিহাস</a></li>
          <li id="menu-item-8501" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8501">
            <a href="#">দর্শন</a>
            <ul className="sub-menu">
              <li id="menu-item-8480" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8480"><a href="https://www.shongshoy.com/philosophy/philosophical-questions/">দর্শনের মৌলিক প্রশ্নাবলী</a></li>
              <li id="menu-item-2926" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2926"><a href="https://www.shongshoy.com/philosophy/philosophy/">নাস্তিকতার দার্শনিক অবস্থানসমূহ</a></li>
            </ul>
          </li>
          <li id="menu-item-8506" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8506">
            <a href="#">বিজ্ঞান</a>
            <ul className="sub-menu">
              <li id="menu-item-8463" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8463"><a href="https://www.shongshoy.com/science/universe/">মহাবিশ্বের উদ্ভব</a></li>
              <li id="menu-item-8462" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8462"><a href="https://www.shongshoy.com/science/earth/">পৃথিবীর উদ্ভব</a></li>
              <li id="menu-item-8483" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8483"><a href="https://www.shongshoy.com/science/abiogenesis/">প্রাণের উদ্ভব ও বিকাশ</a></li>
              <li id="menu-item-8482" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8482"><a href="https://www.shongshoy.com/science/evolution/">বিবর্তন তত্ত্ব</a></li>
            </ul>
          </li>
          <li id="menu-item-8507" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8507">
            <a href="#">তথ্যভাণ্ডার</a>
            <ul className="sub-menu">
              <li id="menu-item-17047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17047"><a href="https://www.shongshoy.com/references/archive/">প্রবন্ধ আর্কাইভ</a></li>
              <li id="menu-item-19760" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19760"><a href="https://www.shongshoy.com/references/islam-archive/">ইসলাম আর্কাইভ</a></li>
              <li id="menu-item-7532" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7532"><a href="https://www.shongshoy.com/references/islam/">তথ্য সমূহ – ইসলাম ধর্ম</a></li>
              <li id="menu-item-7529" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7529"><a href="https://www.shongshoy.com/references/hinduism/">তথ্য সমূহ – হিন্দু ধর্ম</a></li>
              <li id="menu-item-7538" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7538"><a href="https://www.shongshoy.com/references/christianity/">তথ্য সমূহ – খ্রিস্টধর্ম</a></li>
            </ul>
          </li>
          <li id="menu-item-2924" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924"><a href="https://www.shongshoy.com/library/">গ্রন্থাগার</a></li>
          <li id="menu-item-6934" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-6934"><a href="https://www.shongshoy.com/about/terms-service-privacy-policy/">নিয়মাবলী</a></li>
          <li id="menu-item-21047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21047"><a href="https://www.shongshoy.com/rules/">নীতিমালা</a></li>
          <li id="menu-item-2925" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2925"><a href="https://www.shongshoy.com/faq/">উত্তরসমূহ</a></li>
        </ul>
      </div>
    </div>
  </nav>

  );
};
export default Navigation;













