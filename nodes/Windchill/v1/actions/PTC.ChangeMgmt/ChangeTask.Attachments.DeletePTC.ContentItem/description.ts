import { INodeProperties } from "n8n-workflow";

export const ChangeTaskAttachmentsDeletePtcContentItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeTaskId',
		name: 'ChangeTaskId-string(path)',
		description: 'Change Task ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"DELETE /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"DELETE /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
];
