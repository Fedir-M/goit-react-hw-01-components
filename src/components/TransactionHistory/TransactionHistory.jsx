import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={s.transactionWrapper}>
      <table className={s.transactionHistory}>
        <thead className={s.titleHead}>
          <tr>
            <th className={s.titleHead2}>Type</th>
            <th className={s.titleHead2}>Amount</th>
            <th className={s.titleHead2}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className={s.bodyBackground} key={item.id}>
              <td className="dataTitle1">{item.type}</td>
              <td className={s.dataTitle2}>{item.amount}</td>
              <td className={s.dataTitle3}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
