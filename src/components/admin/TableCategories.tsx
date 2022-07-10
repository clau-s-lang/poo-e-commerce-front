import React, { useEffect } from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { LoadingCustom } from "../widgets/CircularProgress";
import { SubstringTextComp } from "../../services/functions";
import { getCategories } from "../../store/actions/category.action";

export const TableCategories = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state: any) => state.categories);

  useEffect(() => {
    if (allCategories.categories.length === 0) dispatch(getCategories());
  }, []);

  const columns: string[] = [
    "NUM",
    "ID",
    "LIBELLE",
    "DESCRIPTION",
    "DATE ENREGIST."
  ];

  return (
    <div className='maiTabClients'>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {!allCategories.isLoadingInfo &&
            allCategories?.categories?.map((item: any, key: number) => (
              <WidgetLgTrRows key={key}>
                <WidgetTd>{key + 1}</WidgetTd>
                <WidgetTd>{item.id}</WidgetTd>
                <WidgetTd>{`${item.libelle}`}</WidgetTd>
                <WidgetTd>{SubstringTextComp(item.description, 20)} </WidgetTd>
                <WidgetTd>
                  {new Date(item.created).toLocaleDateString()}
                </WidgetTd>
              </WidgetLgTrRows>
            ))}
        </Table>
        <div>{allCategories.isLoadingInfo && <LoadingCustom />}</div>
      </ContentTable>
      <div className='content-actions'>
        <div>
          <Button styleBtn={"btnPrimaryGradient"} textBtn={"Ajouter"} />
        </div>
      </div>
    </div>
  );
};
