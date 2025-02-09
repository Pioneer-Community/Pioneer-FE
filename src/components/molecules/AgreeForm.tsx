import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const AgreeForm = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();
  return (
    <div className="mt-28">
      <p className="text-center">
        스위스 커뮤니티(이하 "서비스")는 스위스에 관심 있는 사용자들이 소통하고
        정보를 교류할 수 있도록 제공되는 플랫폼입니다.
        <br /> 본 이용약관(이하 "약관")은 사용자가 본 서비스를 이용함에 있어
        준수해야 할 내용을 규정합니다. <br />
        서비스를 이용하기 전에 본 약관을 주의 깊게 읽어 주시기 바랍니다.
      </p>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">약관의동의</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 본 서비스를 이용함으로써 귀하는 본 약관에 동의하는 것으로
                간주됩니다.
                <br />
                2. 약관에 동의하지 않을 경우, 서비스를 이용할 수 없습니다.
                <br />
                3. 본 약관은 필요 시 수시로 변경될 수 있으며, 변경 사항은 공지
                후 즉시 효력이 발생합니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">계정 생성 및 관리</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 서비스를 이용하려면 계정을 생성해야 하며, 정확하고 최신의
                정보를 제공해야 합니다.
                <br />
                2. 귀하는 귀하의 계정 보안 및 활동에 대한 책임이있습니다.
                <br />
                3. 타인의 계정을 무단으로 사용하거나, 허위 정보를 제공하는
                행위는 금지됩니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">사용자 의무</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 서비스 이용 시 타인의 권리를 침해하거나 불법적인 활동을
                해서는 안됩니다.
                <br />
                2. 다음과 같은 행위는 엄격히 금지됩니다
                <br />
                허위 정보 게시 타인을 비방하거나 불쾌감을 주는 행위
                <br /> 스팸, 불법 광고 및 사기 행위
                <br />
                서비스의기술적 안정성을 위협하는 행위
                <br />
                3. 커뮤니티 내에서는 예의를 지키며, 스위스의 문화와 법률을
                존중해야 합니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">콘텐츠</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 사용자가 작성한 모든 콘텐츠는 해당 사용자가 책임을 집니다.
                <br />
                2. 커뮤니티에 게시된 콘텐츠는 스위스 커뮤니티의 검토 후 삭제
                또는 수정될 수 있습니다.
                <br />
                3. 사용자는 자신의 콘텐츠에 대해 필요한 권리 및 허가를 소유해야
                하며, 지적 재산권을 침해하지 않아야 합니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">개인정보 보호</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 귀하의 개인정보는 스위스 커뮤니티의 개인정보 처리방침을
                준수하여 처리됩니다.
                <br />
                2. 서비스 사용 시 수집된 정보는 서비스 개선 및 사용자 경험
                향상을 위해 사용됩니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">서비스 제공</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 본 서비스는 "있는 그대로" 제공되며, 특정 목적에 대한 적합성
                또는 오류 발생 가능성에 대한 보장은 하지 않습니다.
                <br />
                2. 스위스 커뮤니티는 예기치 않은 기술적 문제로 인해 서비스가
                중단될 수 있음을 알립니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">책임의 제한</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 스위스 커뮤니티는 사용자 간의 분쟁, 콘텐츠로 인한 손해 및
                기타 간접적 손해에 대해 책임을 지지 않습니다.
                <br />
                2. 사용자가 약관을 위반하여 발생한 모든 문제는 해당 사용자가
                책임을 집니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">약관 위반</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 약관을 위반하는 사용자는 서비스 이용이 제한될 수 있습니다.
                <br />
                2. 스위스 커뮤니티는 경고 없이 계정을 일시 정지하거나 삭제할
                권한이 있습니다.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <article className="flex space-x-4 w-full">
        <Checkbox {...label} />
        <Accordion className="flex-1">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">준거법 및 분쟁 해결</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                1. 본 약관은 스위스 연방 법률에 따라 해석되고 적용됩니다.
                <br /> 2. 서비스 이용과 관련하여 발생하는 모든 분쟁은 스위스
                법원에서 해결됩니다
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>

      <Button
        backgroundColor="bg-lightyellow"
        textColor="text-black"
        text="다음"
        onClick={() => navigate("/signup")}
      />
    </div>
  );
};

export default AgreeForm;
