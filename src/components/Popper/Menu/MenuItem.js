import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        sparate: data.sparate,
    });
    return (
        <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
            <span className={cx('title')}>{data.title}</span>
        </Button>
    );
}
export default MenuItem;
