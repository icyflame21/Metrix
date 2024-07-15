import Flex from "components/common/Flex";
import IconItem from "components/common/icon/IconItem";
import { Card, Form } from "react-bootstrap";

const StatsItem = ({ stat, deal_type, index }) => {
    const { title1, title2, title3, title1_value, title2_value, title3_value, extraValue_title1, extraValue_title2, extraValue_title3, icon, color, type, showOptions } = stat;

    const handleTitle = (title, value, extraValue) => {
        return (
            <div>
                {title && <p className="fs--1 m-0 mb-1 p-0 text-600">{title}</p>}
                <Flex alignItems="center">
                    {value && <p className="fs--1 text-1000 m-0 p-0 text-wrap">{value}</p>}
                    {extraValue && <p className="m-0 p-0 fs--2 text-success fw-medium ms-1 text-wrap">{extraValue}</p>}
                </Flex>
            </div>
        )
    }
    return (
        <Card className={`${index === 0 && deal_type === "deal_forecast" ? "bg-soft-primary" : ""} `}>
            <Card.Body>
                <Flex
                    justifyContent="between"
                    alignItems="center"
                    className="mb-4 w-100"
                >
                    <IconItem
                        tag="div"
                        icon={icon}
                        type={type}
                        bg={`soft-${color}`}
                        color={color}
                        style={{
                            borderRadius: "14%",
                        }}
                    />
                    {index === 0 && deal_type === "deal_forecast" ? null : showOptions && <div>
                        <Form.Select size="sm" className="fs--2  w-auto bg-transparent text-wrap text-600 border-0 shadow-none" style={{ backgroundSize: "8px" }}>
                            <option>Today</option>
                            <option defaultChecked>This week</option>
                            <option>This month</option>
                        </Form.Select>
                    </div>}
                </Flex>
                <Flex alignItems="center" className="gap-5 w-100">
                    {handleTitle(title1, title1_value, extraValue_title1)}
                    {handleTitle(title2, title2_value, extraValue_title2)}
                    {handleTitle(title3, title3_value, extraValue_title3)}
                </Flex>
            </Card.Body>
        </Card>
    );
};

export default StatsItem