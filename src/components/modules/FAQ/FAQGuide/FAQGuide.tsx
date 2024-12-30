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
      <div className={s.processArea}>
        <div className={s.process}>
          <Image
            src={
              "https://wiblebiz.kia.com/static/media/ic_process01.846102db750160d46113.svg"
            }
            alt="register"
            width={48}
            height={48}
          />
          <div className={s.title}>1. 문의 등록</div>
          <div className={s.description}>
            상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
          </div>
          <Image
            className={s.arrowIcon}
            src={
              "https://wiblebiz.kia.com/static/media/ic_step_arrow.02faa866c421e8f34477.svg"
            }
            width={24}
            height={24}
            alt="arrow_icon"
          />
        </div>
        <div className={s.process}>
          <Image
            src={
              "https://wiblebiz.kia.com/static/media/ic_process02.200616d9976626829e54.svg"
            }
            alt="manage_setting"
            width={48}
            height={48}
          />
          <div className={s.title}>2. 관리자 설정</div>
          <div className={s.description}>
            관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
          </div>
          <Image
            className={s.arrowIcon}
            src={
              "https://wiblebiz.kia.com/static/media/ic_step_arrow.02faa866c421e8f34477.svg"
            }
            width={24}
            height={24}
            alt="arrow_icon"
          />
        </div>
        <div className={s.process}>
          <Image
            src={
              "https://wiblebiz.kia.com/static/media/ic_process03.292a6f8c9d4e9ae4c7b9.svg"
            }
            alt="employee_join"
            width={48}
            height={48}
          />
          <div className={s.title}>3. 임직원 가입</div>
          <div className={s.description}>
            사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
          </div>
          <Image
            className={s.arrowIcon}
            src={
              "https://wiblebiz.kia.com/static/media/ic_step_arrow.02faa866c421e8f34477.svg"
            }
            width={24}
            height={24}
            alt="arrow_icon"
          />
        </div>
        <div className={s.process}>
          <Image
            src={
              "https://wiblebiz.kia.com/static/media/ic_process04.6bcc2c45f287d0c8226a.svg"
            }
            alt="use_service"
            width={48}
            height={48}
          />
          <div className={s.title}>4. 서비스 이용</div>
          <div className={s.description}>
            사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!
          </div>
        </div>
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
