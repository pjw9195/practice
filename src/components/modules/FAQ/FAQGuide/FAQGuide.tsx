import Image from "next/image";
import s from "./FAQGuide.module.scss";

export default function FAQGuide() {
  return (
    <>
      <div className={s.subTitle}>서비스 문의</div>
      <div className={s.serviceList}>
        <div className={s.serviceBox}>
          <Image
            alt="product_suggestion_download"
            width={48}
            height={48}
            src="https://wiblebiz.kia.com/static/media/ic_download.febe2d94e4afb34fb807.svg"
          />
          <div>상품제안서 다운로드</div>
        </div>
        <div className={s.serviceBox}>
          <Image
            alt="register_product"
            width={48}
            height={48}
            src="https://wiblebiz.kia.com/static/media/ic_write.6fce5366fbb91212dc5c.svg"
          />
          <div>상담문의 등록하기</div>
        </div>
        <div className={s.serviceBox}>
          <Image
            alt="ask_kakao"
            width={48}
            height={48}
            src="https://wiblebiz.kia.com/static/media/ic_talk.ed42cf9a28983def7c38.svg"
          />
          <div>
            <div>카톡으로 문의하기</div>
            <div className={s.kakaoId}>ID: Wible Biz(위블 비즈)</div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div className={s.subTitle}>이용 프로세스 안내</div>
      <div>
        <Image />
        <div>1. 문의 등록</div>
        <div>상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.</div>
      </div>
      <div className={s.wibleMeetBox}>
        <div className={s.wibleText}>
          <span className={s.wibleHighlight}>위블 비즈 App</span> 지금
          만나보세요!
        </div>
        <div className={s.mobileArea}>
          <div className={s.mobileBox}>
            <Image
              alt="googlePlay"
              src={
                "https://wiblebiz.kia.com/static/media/logo_googleplay.0988de4fccf649a9a960.svg"
              }
              width={28}
              height={28}
            />
            <span>Google Play</span>
          </div>
          <div className={s.mobileBox}>
            <Image
              alt="appStore"
              src={
                "https://wiblebiz.kia.com/static/media/logo_appstore.fa5d4b59f7dbf3e27ca4.svg"
              }
              width={28}
              height={28}
            />
            <span>App Store</span>
          </div>
        </div>
      </div>
    </>
  );
}
