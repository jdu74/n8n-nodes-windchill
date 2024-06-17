import { INodeProperties } from "n8n-workflow";

export const ChangeNoticeAttachmentsDeletePtcContentItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeNoticeId',
		name: 'ChangeNoticeId-string(path)',
		description: 'Change Notice ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"DELETE /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
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
					"DELETE /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
];
