import { useParams, useRouteMatch } from 'react-router-dom';
import * as React from 'react';

const Topic = (): JSX.Element => {
	const { topicId } = useParams();
	return (
		<>
			<h3>{topicId}</h3>
		</>
	);
};

export default Topic;