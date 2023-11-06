import { css } from "@emotion/native";

export default styled = {
  conteiner: css`
    flex: 1;
    flex-direction: column;
    background-color: #c6c6c6;
  `,
  questionConteiner: css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40%;

    background-color: antiquewhite;
  `,
  questionText: css`
    font-size: 28px;
  `,
  answerConteiner: css`
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 30px;

    width: 100%;
    height: 60%;

    background-color: beige;
  `,
  answer: css`
    justify-content: center;
    align-items: center;

    width: 70%;
    height: 24%;

    border-radius: 10px;
    background-color: blanchedalmond;
  `,

  answerText: css`
    font-size: 24px;
  `,
};
