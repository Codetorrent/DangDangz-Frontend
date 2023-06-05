import React from 'react'
import styled from "@emotion/styled";
import { MdVerified } from 'react-icons/md'


const PuppiesView = () => {

    const PuppyCard = ()=> {
        return (
            <CardView>
            <CardInuBox />
            <CardTitle>Shiba Inu <MdVerified color='#04B154' size={20}/></CardTitle>
            <CardTable>
                <TableCell>
                    <TableHead>
                        FLOOR
                    </TableHead>
                    <TableData>
                        0.02 ETH
                    </TableData>
                </TableCell>
                <TableCell>
                    <TableHead>
                        TOTAL VOLUME
                    </TableHead>
                    <TableData>
                        0.66 ETH
                    </TableData>
                </TableCell>
            </CardTable>
            </CardView>
        )
    }

  return (
    <PuppyWrapper>
    <PuppyCard />
    <PuppyCard />
    <PuppyCard />
    </PuppyWrapper>
  )
}

const PuppyWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin : 40px 0px ;
`;

const CardView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 16px;
    gap: 16px;

    width: 357px;
    height: 388px;

    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
`;

const CardInuBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 40px;

    width: 357px;
    height: 220.5px;
    background-image: url(/shiba-inu.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const CardTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
`;

const CardTable = styled.div`
    font-size: 16px;
    font-weight: 600;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 16px;

    width: 238.75px;
    height: 51px;
`;

const TableCell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 119.38px;
    height: 51px;
`;
const TableHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 119.38px;
    height: 18.5px;
    color: #707A83;
    font-size: 12px;
`;

const TableData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 51.375px 0.5px 0px;

    height: 24.5px;
    font-size: 16px;
`;


export default PuppiesView