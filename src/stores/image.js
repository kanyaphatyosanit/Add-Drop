import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
        src:'https://erp.mju.ac.th/picture/information/217499d0c12c42729ca6696f57fa8207s.jpg',
        alt:'06',
        detail:' ม.แม่โจ้ จัดพิธีทำบุญตักบาตร บำเพ็ญกุศลถวายพระพรแด่สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา ให้ทรงหายจากพระอาการประชวร',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/b10a3cb20aaa4d2bba2b6109c417d126s.jpg',
        alt:'02',
        detail:'  มหาวิทยาลัยแม่โจ้ เข้าร่วมการแข่งขันกีฬามหาวิทยาลัยแห่งประเทศไทย ครั้งที่ 48 “ดอกจานบ้านเชียงเกมส์”',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/b391fe37b80b4780979499dc2dc6e57fs.jpg',
        alt:'05',
        detail:' อบต.คลองปาง จ.ตรัง เข้าศึกษาดูงาน อพ.สธ.-มจ.',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/5f2bab5166f34fff8ad1da231371e4a0s.jpg',
        alt:'04',
        detail:' องค์การบริหารส่วนจังหวัดนครราชสีมา ศึกษาดูงาน “ระบบการทำฟาร์ม เกษตรสมัยใหม่ (4.0)”',
    },
  ]);
  return {image};
});
