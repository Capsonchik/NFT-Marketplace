import {Link} from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styled from 'styled-components';


const StyledBreadcrumbs = styled.div`
  .breadcrumbs {
    display: flex;
  }

  .breadcrumbs-link {
    text-decoration: none;
    padding: 0 10px;
    color: black;
  }
`

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return(
    <StyledBreadcrumbs>
      <div className="breadcrumbs">
        {breadcrumbs.map(({breadcrumb, match}, index) => (
          <div className="bc" key={match.url}>
            <Link className='breadcrumbs-link' to={match.url || ""}>{breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && ">"}
          </div>
        ))}
      </div>
    </StyledBreadcrumbs>
)}