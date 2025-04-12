import BirthdayIcon from '../../icons/birthday.svg';
import LogoIcon from '../../icons/soft-line-logo.svg';

const Icons = {
    birthday: BirthdayIcon,
    logoIcon: LogoIcon
};

document.querySelectorAll('[iconName]').forEach(iconElement => {
    const iconName = iconElement.getAttribute('iconName');
    iconElement.innerHTML = `<svg><use href="#${Icons[iconName]}"></use></svg>`;
});
