// Breadcrumb.jsx

import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.css'; // Aapki CSS file

const BreadCrumbs = () => {
  const location = useLocation();

  // Extracting path segments from the URL
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Generating breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1; // Checking if it's the last breadcrumb
    const pathToSegment = `/${pathSegments.slice(0, index + 1).join('/')}`;

    return (
      <span key={index} className={`breadcrumb-segment ${isLast ? 'last' : ''}`}>
        {index > 0 && <span> / </span>}
        <Link to={pathToSegment} className={`${isLast ? 'last-link' : 'regular-link'}`}>{segment}</Link>
      </span>
    );
  });

  return <div className="breadcrumbs">{breadcrumbs}</div>;
};

export default BreadCrumbs;
