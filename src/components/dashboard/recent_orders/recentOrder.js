import Flex from "components/common/Flex";
import { Link } from "react-router-dom";
import SoftBadge from "components/common/SoftBadge";

export const RecentOrder = ({ file, isLast }) => {
    const { img, name, user, date, status } = file;
    return (
        <>
            <Flex justifyContent="between" className="mb-3 gap-3">
                <Flex className="hover-actions-trigger">
                    <div className="file-thumbnail">
                        <img
                            className="h-100 w-100 fit-cover rounded-2"
                            src={img}
                            alt={name}
                        />
                    </div>
                    <div className="ms-3 flex-shrink-1 flex-grow-1">
                        <h6 className="mb-1">
                            <Link className="stretched-link text-900 fw-semi-bold" to="#!">
                                {name}
                            </Link>
                        </h6>
                        <div className="fs--1 text-muted">
                            <span className="fw-semi-bold">{user}</span>
                        </div>
                    </div>
                </Flex>
                <div className="fs--2 text-end">
                    <p className="fw-medium text-600 m-0 p-0">{date}</p>
                    <SoftBadge
                        pill
                        bg={status.toLowerCase() === "pending" ? "warning" : "success"}
                        className="mt-2 fs--2 fw-medium"
                    >
                        {status}
                    </SoftBadge>
                </div>
            </Flex>
            {!isLast && <hr className="text-200" />}
        </>
    );
};
