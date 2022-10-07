import css from "./ContactInfo.module.css";
import Heading from "../../UI/Text/Heading";

const ContactInfo = (props) => {
  const info = props.info;
  const data = Object.keys(info);
  return (
    <>
      <div className={css.main}>
        <Heading text="Personal Contact Info" className={css.heading} />
        <table className={css.table}>
          <tbody>
            {data.map((datum, index) => {
              const rowClass = index % 2 === 0 ? css.row1 : css.row2;
              return (
                <tr key={`${index}| ${datum}`} className={rowClass}>
                  <td className={css.cat}>{datum}</td>
                  <td className={css.info}>{info[datum]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactInfo;
