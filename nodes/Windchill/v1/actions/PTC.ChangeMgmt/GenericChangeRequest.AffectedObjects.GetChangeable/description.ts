import { INodeProperties } from "n8n-workflow";

export const GenericChangeRequestAffectedObjectsGetChangeableDescription: INodeProperties[] = [
	{
		displayName: 'GenericChangeRequestId',
		name: 'GenericChangeRequestId-string(path)',
		description: 'Generic Change Request ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ChangeableId',
		name: 'ChangeableId-string(path)',
		description: 'Changeable ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				],
			},
		},
	},
];
