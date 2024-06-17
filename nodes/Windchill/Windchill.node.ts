import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';
import { Windchill as WindchillV1} from './v1/Windchill.node';

export class Windchill extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Windchill',
			name: 'windchill',
			icon: 'file:windchill.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: '## Welcome to the Windchill REST API',
			defaultVersion: 1
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new WindchillV1(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}
